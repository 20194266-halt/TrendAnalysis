const express = require('express');
const { Client } = require('@elastic/elasticsearch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({ node: 'http://localhost:9200' }); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/tweets', async (req, res) => {
    try {
        const { body } = await client.search({
            index: 'twitter_data',
            body: {
                query: {
                    match_all: {}
                },
                size: 1000
            }
        });

        const tweets = body.hits.hits.map(hit => ({
            tweet_id: hit._id,
            timestamp: hit._source.timestamp,
            query: hit._source.query,
            user: hit._source.user,
            tweet: hit._source.tweet
        }));

        res.json(tweets);
    } catch (error) {
        console.error('Error fetching tweets:', error);
        res.status(500).json({ error: 'Failed to fetch tweets' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

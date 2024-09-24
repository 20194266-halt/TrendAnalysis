async function fetchTweets() {
    try {
        const response = await fetch('/api/tweets');
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching tweets:', error);
        return [];
    }
}

document.getElementById('searchButton').addEventListener('click', async function() {
    const query = document.getElementById('query').value.toLowerCase();
    const tweets = await fetchTweets(); // Fetch tweets from backend
    displayResults(query, tweets);
});

// Function to display results
function displayResults(query, tweets) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    const filteredTweets = tweets.filter(tweet => 
        tweet.tweet.toLowerCase().includes(query) || 
        tweet.user.toLowerCase().includes(query) || 
        tweet.query.toLowerCase().includes(query)
    );

    if (filteredTweets.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    filteredTweets.forEach(tweet => {
        const tweetCard = document.createElement('div');
        tweetCard.className = 'tweet-card';
        tweetCard.innerHTML = `
            <h4>User: ${tweet.user}</h4>
            <p><strong>Tweet:</strong> ${tweet.tweet}</p>
            <p><strong>Timestamp:</strong> ${tweet.timestamp}</p>
        `;
        resultsDiv.appendChild(tweetCard);
    });
}

// Display all tweets by default when the page loads
(async () => {
    const tweets = await fetchTweets(); // Fetch tweets when the page loads
    displayResults('', tweets);
})();

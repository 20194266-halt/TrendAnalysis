import tweepy
import happybase
import pandas as pd
import uuid
from config import API_KEY, API_SECRET_KEY, ACCESS_TOKEN, ACCESS_TOKEN_SECRET 


# Connect to Twitter API
auth = tweepy.OAuth1UserHandler(API_KEY, API_SECRET_KEY, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

# Fetch tweets (e.g., by a specific query)
query = 'NO_QUERY'
tweets = api.search_tweets(q=query, count=100, tweet_mode='extended')

data_list = []
for tweet in tweets:
    data_list.append({
        'tweet_id': tweet.id,
        'timestamp': tweet.created_at,
        'query': query,
        'user': tweet.user.screen_name,
        'tweet': tweet.full_text
    })

df = pd.DataFrame(data_list)

# Connect to HBase
CDH6_HBASE_THRIFT_VER = '0.92'
COLUMN_FAMILY = 'col_f' 
connection = happybase.Connection(host='localhost', port=9090) 
connection.open()

table_name = 'twitter_data'
table = connection.table(table_name)

for index, row in df.iterrows():
    row_key = str(uuid.uuid4())
    
    data = {
        f'{COLUMN_FAMILY}:tweet_id': str(row['tweet_id']),
        f'{COLUMN_FAMILY}:timestamp': row['timestamp'].strftime('%Y-%m-%d %H:%M:%S'),
        f'{COLUMN_FAMILY}:query': row['query'],
        f'{COLUMN_FAMILY}:user': row['user'],
        f'{COLUMN_FAMILY}:tweet': row['tweet']
    }
    print(data)
    
    table.put(row_key, data)

connection.close()

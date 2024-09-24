# Twitter Data Processing Project

## Overview

This project focuses on collecting data from the Twitter API, storing it in HBase, migrating the data to Elasticsearch, and visualizing the results using Kibana. The goal is to create a search engine that utilizes the Elasticsearch API to allow for efficient searching and querying data.

## Project Flow

1. **Data Collection**: 
   - Use the Twitter API to fetch tweets based on specific keywords or hashtags.
   - Parse and structure the data for processing.

2. **Data Storage**:
   - Store the collected tweets in HBase for reliable and scalable storage.
   - Each tweet is stored with relevant fields such as tweet ID, timestamp, user information, and content.

3. **Data Migration**:
   - Migrate the data from HBase to Elasticsearch to enable full-text search capabilities.
   - Nifi is used

4. **Data Visualization**:
   - Use Kibana to create visualizations and dashboards based on the Elasticsearch data.
   - Generate insights and trends from the collected tweets, such as the frequency of certain keywords over time.

5. **Search Engine Implementation**:
   - Develop a web application that serves as a search engine.
   - Utilize the Elasticsearch API to enable users to search through the indexed tweets efficiently.
   - Implement features such as filtering by date, user, and specific keywords.

## Technologies Used

- **Twitter API**: For collecting tweet data.
- **HBase**: For storing raw tweet data.
- **Nifi**: For migrating the data from HBase to Elasticsearch
- **Elasticsearch**: For indexing and searching tweet data.
- **Kibana**: For visualizing data and creating dashboards.
- **Node.js**: For developing the web application to serve as a search engine.
- **HTML/CSS**: For front-end design of the web application.

## Data pipeline

![alt text](/Img/pipeline.png)
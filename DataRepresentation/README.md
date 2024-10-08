# Data Representation Layer

This project sets up a data representation layer that connects Elasticsearch to Kibana, allowing you to visualize and analyze your data effectively.

## Introduction

Elasticsearch is a powerful search and analytics engine, while Kibana provides a user-friendly interface for visualizing and exploring your data stored in Elasticsearch. This project facilitates the integration of both tools to create insightful dashboards and reports.

## Prerequisites

- [Java 11 or higher](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Elasticsearch](https://www.elastic.co/downloads/elasticsearch)
- [Kibana](https://www.elastic.co/downloads/kibana)

## Visualizations

1. **Creating Visualizations:**
   - Go to the **Visualize** tab in Kibana.
   - Click on **Create visualization** and select the type of visualization 
   - Choose your index pattern and configure the visualization settings.

2. **Dashboards:**
   - Combine multiple visualizations into a single dashboard by navigating to the **Dashboard** tab.
   <img src="/Img/dashboard.png" >
3. **Search Engine**

   - The **Twitter Search Engine** is a web-based application that allows users to search through a collection of Twitter data stored in Elasticsearch. 
   - The project is built with a **Node.js** backend that interfaces with Elasticsearch to retrieve data and serves static files for the frontend. The frontend allows users to search tweets using a search bar and displays the results dynamically.
    <img src="/Img/searchEngine.png" >



# Storage Layer

## Overview

This project involves setting up a storage layer using Hadoop, HBase, and Elasticsearch. This layer is designed to provide scalable and efficient storage solutions for large datasets, enabling fast retrieval and analytics.

## Prerequisites

- **Java 8 or higher**
- **Maven**: For managing any Java projects (if applicable).
- **Linux/Unix**: Preferred operating system for Hadoop and HBase installations.

## Installation and Configuration

### Hadoop Installation

1. **Download Hadoop**:

   Download the latest stable version of Hadoop from the [Apache Hadoop website](https://hadoop.apache.org/releases.html).

2. **Extract the Downloaded File**:
   tar -xzf hadoop-x.y.z.tar.gz
   cd hadoop-x.y.z/etc/hadoop
   config 3 file: core-site.xml, hdfs-site.xml, yarn-site.xml
   Format hdfs and start
   <img src="/Img/hdfs.png" alt="HDFS" width="600" height="400">
### HBase Installation 
1. **Download HBase**
    Download from the ![Apache HBase website](https://downloads.apache.org/hbase/2.5.9/)
2. **Extract the Downloaded File**:
   tar -xzf hbase-x.y.z.tar.gz
   sudo mv hbase-x.y.z /usr/local/hbase
   Set env variables JAVA_HOME, HBASE_REGIONSERVERS, HBASE_MANAGES_ZK in /usr/local/hbase/conf/hbase-env.sh
   Config Hbase in /usr/local/hbase/conf/hbase-site.xml
   Start Hbase cd /usr/local/hbase/bin && ./start-hbase.sh
    <img src="/Img/hbase.png" alt="HBASE" width="600" height="400">
   Once HBase is running, you need to start the Thrift server to allow external connections from clients like Python. Start the Thrift server with: hbase thrift start
3. **Elastic Search Installation**
    Install Elastic Search ![Elastic Search](https://www.elastic.co/guide/en/elasticsearch/reference/current/targz.html)
    Create an Index for storing data
    <img src="/Img/search5.png" width="600" height="400">
4. **Migrate data from HBase to Elastic Search**
    Processor GetHBase
    <img src="/Img/search1.png" width="600" height="400">
    <img src="/Img/search2.png" width="600" height="400">
    Processor PutElasticSearchHttp
    <img src="/Img/search3.png" width="600" height="400">
    <img src="/Img/search4.png" width="600" height="400">
    Pipeline
    <img src="/Img/search0.png" width="600" height="400">


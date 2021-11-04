Kafka with NodeJS
----------------

1. Start Zookeeper in local machine:

 - bin/zookeeper-server-start.sh config/zookeeper.properties

2. Copy server0.properties, server1.properties, server2.properties in kafka config folder '/Users/yourusername/kafka/config'

3. Start kafka server:

- bin/kafka-server-start.sh config/server0.properties
- bin/kafka-server-start.sh config/server1.properties
- bin/kafka-server-start.sh config/server2.properties

4. Create animals topic

- bin/kafka-topics.sh \
--bootstrap-server localhost:9092,localhost:9093,localhost:9094 \
--create \
--replication-factor 3 \
--partitions 5 \
--topic animals

5. DO npm i and run producer.js and consumer.js in separate terminal
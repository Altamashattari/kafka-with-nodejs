import {Kafka} from 'kafkajs';
import Chance from 'chance';

const kafka = new Kafka({
    clientId: 'producer',
    brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
});

const producer = kafka.producer();
const topic = "animals";

const produceMessage = async () => {
    try {
        await producer.send({
            topic,
            messages: [{
                value: new Chance().animal(),
            }]
        })
    } catch (error) {
        console.log(error);
    }
};

const run = async () => {
    // Producing
    await producer.connect();

    setInterval(produceMessage, 1000);
};

run().catch(console.error);
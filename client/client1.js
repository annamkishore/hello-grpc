const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = '../spec/first.proto';
const {Timestamp} = require('google-protobuf/google/protobuf/timestamp_pb');

// Load the protobuf
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const exampleProto = grpc.loadPackageDefinition(packageDefinition).example;

// Create a client
async function main() {
    const client = new exampleProto.Greeter('localhost:50051', grpc.credentials.createInsecure());

    let request = {name: 'Kṛṣṇa', createdAt: Timestamp.fromDate(new Date()).toObject()}
    client.sayHello((request), (error, response) => {
        if (!error) {
            console.log('Greeting:', response.message);
        } else {
            console.error('Error:', error);
        }
    });
}

main();

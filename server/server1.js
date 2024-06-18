const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const {Server} = require("@grpc/grpc-js");
const PROTO_PATH = '../spec/first.proto'

// ---------------standard boilerplate--------------------
// Load .proto using proto-loader
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
// load package using grpc-js
const exampleProto = grpc.loadPackageDefinition(packageDefinition).example;

// ---------------Implementation--------------------
// SayHello Implementation, purposefully named sayHello1
function sayHello1(call, callback) {
    console.log(new Date, call.request) // observe this
    callback(null, {message: 'Hello ' + call.request.name});
}

// ---------------Create/Start server--------------------
function main() {
    const server = new grpc.Server();
    server.addService(exampleProto.Greeter.service, {sayHello: sayHello1});
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        console.log("Krishna, Server running at http://0.0.0.0:50051");
    });
}

main();

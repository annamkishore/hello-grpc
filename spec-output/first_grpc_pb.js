// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var first_pb = require('./first_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_example_HelloReply(arg) {
  if (!(arg instanceof first_pb.HelloReply)) {
    throw new Error('Expected argument of type example.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_HelloReply(buffer_arg) {
  return first_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_HelloRequest(arg) {
  if (!(arg instanceof first_pb.HelloRequest)) {
    throw new Error('Expected argument of type example.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_HelloRequest(buffer_arg) {
  return first_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/example.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: first_pb.HelloRequest,
    responseType: first_pb.HelloReply,
    requestSerialize: serialize_example_HelloRequest,
    requestDeserialize: deserialize_example_HelloRequest,
    responseSerialize: serialize_example_HelloReply,
    responseDeserialize: deserialize_example_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);

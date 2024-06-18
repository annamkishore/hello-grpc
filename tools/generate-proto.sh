#!/bin/bash
PROTO_DIR=../spec
PROTO_FILE=first.proto
OUT_DIR=../spec-output/

npx grpc_tools_node_protoc \
  --proto_path=$PROTO_DIR \
  --js_out=import_style=commonjs,binary:$OUT_DIR \
  --grpc_out=grpc_js:$OUT_DIR \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  $PROTO_FILE

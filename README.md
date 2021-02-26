# Typescript Envoy External Authorization Protoc 

This repo is an attempt of generate Typescript Definition of the envoy gRPC external auth service [https://github.com/envoyproxy/envoy/blob/main/api/envoy/service/auth/v3/external_auth.proto](https://github.com/envoyproxy/envoy/blob/main/api/envoy/service/auth/v3/external_auth.proto)

# Install deps

```console
yarn
```

# Run 

```console
yarn protoc:generate
```

This repo use [protoc-gen-ts](https://github.com/improbable-eng/ts-protoc-gen) plugin.

# Credits

The [generate_protos.js](https://github.com/guillaumemaka/envoy_external_auth_protoc_ts/blob/main/generate_protos.js) is a modified copy of [generate.js](https://github.com/improbable-eng/ts-protoc-gen/blob/master/generate.js) from  [protoc-gen-ts](https://github.com/improbable-eng/ts-protoc-gen) plugin.plugin.

All the proto files come from 

- protobuf: [https://github.com/protocolbuffers/protobuf](https://github.com/protocolbuffers/protobuf)
- udpa: [https://github.com/cncf/udpa](https://github.com/cncf/udpa)
- envoy: [https://github.com/envoyproxy/envoy](https://github.com/envoyproxy/envoy)
- googleapis: [https://github.com/googleapis/googleapis](https://github.com/googleapis/googleapis)

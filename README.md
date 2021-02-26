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

The [generate_protos.js](./blob/main/generate.js) is a modified copy of [generate.js](https://github.com/improbable-eng/ts-protoc-gen/blob/master/generate.js) from  [protoc-gen-ts](https://github.com/improbable-eng/ts-protoc-gen) plugin.plugin.
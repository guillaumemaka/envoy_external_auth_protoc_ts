load("@rules_proto//proto:defs.bzl", "proto_library")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_test")
load("@rules_proto_grpc//js:defs.bzl", "js_grpc_node_library")
load("@npm//@bazel/typescript:index.bzl", "ts_library")

package(default_visibility = ["//visibility:private"])

js_grpc_node_library(
    name = "envoyproxy_external_auth_js",
    deps = ["@com_envoyproxy//api/envoy/service/auth/v3:pkg"],
)

ts_library(
    name = "main_ts",
    srcs = [
        "main.ts",
    ],
    deps = [
        ":envoyproxy_external_auth_js",
        "@npm//@grpc/grpc-js",
    ],
    module_name= "@envoy/authz-grpc"
)

nodejs_test(
    name = "test_main",
    data = [
        ":main_ts",
    ],
    entry_point = ":main.ts",
)
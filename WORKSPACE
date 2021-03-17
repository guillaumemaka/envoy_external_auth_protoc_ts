load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

git_repository(
    name = "envoy_api", 
    commit = "a9e83cd2145c5b4ee54d38dec148033bfd44bada", 
    shallow_since = "1615951990 +0000",
    remote = "https://github.com/envoyproxy/data-plane-api.git"
)

load("//bazel:repositories.bzl", "api_dependencies")

api_dependencies()

load("@rules_proto_grpc//:repositories.bzl", "rules_proto_grpc_toolchains", "rules_proto_grpc_repos")
rules_proto_grpc_toolchains()
rules_proto_grpc_repos()

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")
rules_proto_dependencies()
rules_proto_toolchains()

load("@rules_proto_grpc//js:repositories.bzl", rules_proto_grpc_js_repos="js_repos")
rules_proto_grpc_js_repos()

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//typescript:package.json",  # This should be changed to your local package.json which should contain the dependencies required
    yarn_lock = "//typescript:yarn.lock",
)

// package: envoy.api.v2.core
// file: envoy/api/v2/core/event_service_config.proto

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_grpc_service_pb from "../../../../envoy/api/v2/core/grpc_service_pb";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class EventServiceConfig extends jspb.Message {
  hasGrpcService(): boolean;
  clearGrpcService(): void;
  getGrpcService(): envoy_api_v2_core_grpc_service_pb.GrpcService | undefined;
  setGrpcService(value?: envoy_api_v2_core_grpc_service_pb.GrpcService): void;

  getConfigSourceSpecifierCase(): EventServiceConfig.ConfigSourceSpecifierCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventServiceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: EventServiceConfig): EventServiceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventServiceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventServiceConfig;
  static deserializeBinaryFromReader(message: EventServiceConfig, reader: jspb.BinaryReader): EventServiceConfig;
}

export namespace EventServiceConfig {
  export type AsObject = {
    grpcService?: envoy_api_v2_core_grpc_service_pb.GrpcService.AsObject,
  }

  export enum ConfigSourceSpecifierCase {
    CONFIG_SOURCE_SPECIFIER_NOT_SET = 0,
    GRPC_SERVICE = 1,
  }
}


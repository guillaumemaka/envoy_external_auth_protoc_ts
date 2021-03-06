// package: envoy.api.v2.core
// file: envoy/api/v2/core/grpc_method_list.proto

import * as jspb from "google-protobuf";
import * as udpa_annotations_migrate_pb from "../../../../udpa/annotations/migrate_pb";
import * as udpa_annotations_status_pb from "../../../../udpa/annotations/status_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class GrpcMethodList extends jspb.Message {
  clearServicesList(): void;
  getServicesList(): Array<GrpcMethodList.Service>;
  setServicesList(value: Array<GrpcMethodList.Service>): void;
  addServices(value?: GrpcMethodList.Service, index?: number): GrpcMethodList.Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcMethodList.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcMethodList): GrpcMethodList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrpcMethodList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcMethodList;
  static deserializeBinaryFromReader(message: GrpcMethodList, reader: jspb.BinaryReader): GrpcMethodList;
}

export namespace GrpcMethodList {
  export type AsObject = {
    servicesList: Array<GrpcMethodList.Service.AsObject>,
  }

  export class Service extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    clearMethodNamesList(): void;
    getMethodNamesList(): Array<string>;
    setMethodNamesList(value: Array<string>): void;
    addMethodNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Service.AsObject;
    static toObject(includeInstance: boolean, msg: Service): Service.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Service, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Service;
    static deserializeBinaryFromReader(message: Service, reader: jspb.BinaryReader): Service;
  }

  export namespace Service {
    export type AsObject = {
      name: string,
      methodNamesList: Array<string>,
    }
  }
}


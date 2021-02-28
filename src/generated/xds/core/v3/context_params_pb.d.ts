// package: xds.core.v3
// file: xds/core/v3/context_params.proto

import * as jspb from "google-protobuf";
import * as udpa_annotations_status_pb from "../../../udpa/annotations/status_pb";

export class ContextParams extends jspb.Message {
  getParamsMap(): jspb.Map<string, string>;
  clearParamsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContextParams.AsObject;
  static toObject(includeInstance: boolean, msg: ContextParams): ContextParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContextParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContextParams;
  static deserializeBinaryFromReader(message: ContextParams, reader: jspb.BinaryReader): ContextParams;
}

export namespace ContextParams {
  export type AsObject = {
    paramsMap: Array<[string, string]>,
  }
}


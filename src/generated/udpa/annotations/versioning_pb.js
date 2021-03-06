// source: udpa/annotations/versioning.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.udpa.annotations.VersioningAnnotation', null, global);
goog.exportSymbol('proto.udpa.annotations.versioning', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.udpa.annotations.VersioningAnnotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.udpa.annotations.VersioningAnnotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.udpa.annotations.VersioningAnnotation.displayName = 'proto.udpa.annotations.VersioningAnnotation';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.udpa.annotations.VersioningAnnotation.prototype.toObject = function(opt_includeInstance) {
  return proto.udpa.annotations.VersioningAnnotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.udpa.annotations.VersioningAnnotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.udpa.annotations.VersioningAnnotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    previousMessageType: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.udpa.annotations.VersioningAnnotation}
 */
proto.udpa.annotations.VersioningAnnotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.udpa.annotations.VersioningAnnotation;
  return proto.udpa.annotations.VersioningAnnotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.udpa.annotations.VersioningAnnotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.udpa.annotations.VersioningAnnotation}
 */
proto.udpa.annotations.VersioningAnnotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreviousMessageType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.udpa.annotations.VersioningAnnotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.udpa.annotations.VersioningAnnotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.udpa.annotations.VersioningAnnotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.udpa.annotations.VersioningAnnotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreviousMessageType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string previous_message_type = 1;
 * @return {string}
 */
proto.udpa.annotations.VersioningAnnotation.prototype.getPreviousMessageType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.udpa.annotations.VersioningAnnotation} returns this
 */
proto.udpa.annotations.VersioningAnnotation.prototype.setPreviousMessageType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `versioning`.
 * @type {!jspb.ExtensionFieldInfo<!proto.udpa.annotations.VersioningAnnotation>}
 */
proto.udpa.annotations.versioning = new jspb.ExtensionFieldInfo(
    7881811,
    {versioning: 0},
    proto.udpa.annotations.VersioningAnnotation,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.udpa.annotations.VersioningAnnotation.toObject),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[7881811] = new jspb.ExtensionFieldBinaryInfo(
    proto.udpa.annotations.versioning,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.udpa.annotations.VersioningAnnotation.serializeBinaryToWriter,
    proto.udpa.annotations.VersioningAnnotation.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[7881811] = proto.udpa.annotations.versioning;

goog.object.extend(exports, proto.udpa.annotations);

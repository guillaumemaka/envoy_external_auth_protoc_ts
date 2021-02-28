// source: envoy/api/v2/core/backoff.proto
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

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var udpa_annotations_migrate_pb = require('../../../../udpa/annotations/migrate_pb.js');
goog.object.extend(proto, udpa_annotations_migrate_pb);
var udpa_annotations_status_pb = require('../../../../udpa/annotations/status_pb.js');
goog.object.extend(proto, udpa_annotations_status_pb);
var validate_validate_pb = require('../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.api.v2.core.BackoffStrategy', null, global);
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
proto.envoy.api.v2.core.BackoffStrategy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.core.BackoffStrategy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.core.BackoffStrategy.displayName = 'proto.envoy.api.v2.core.BackoffStrategy';
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
proto.envoy.api.v2.core.BackoffStrategy.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.BackoffStrategy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.BackoffStrategy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.BackoffStrategy.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseInterval: (f = msg.getBaseInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    maxInterval: (f = msg.getMaxInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.core.BackoffStrategy}
 */
proto.envoy.api.v2.core.BackoffStrategy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.BackoffStrategy;
  return proto.envoy.api.v2.core.BackoffStrategy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.BackoffStrategy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.BackoffStrategy}
 */
proto.envoy.api.v2.core.BackoffStrategy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setBaseInterval(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxInterval(value);
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
proto.envoy.api.v2.core.BackoffStrategy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.BackoffStrategy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.BackoffStrategy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.BackoffStrategy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseInterval();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMaxInterval();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration base_interval = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.core.BackoffStrategy.prototype.getBaseInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.core.BackoffStrategy} returns this
*/
proto.envoy.api.v2.core.BackoffStrategy.prototype.setBaseInterval = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.core.BackoffStrategy} returns this
 */
proto.envoy.api.v2.core.BackoffStrategy.prototype.clearBaseInterval = function() {
  return this.setBaseInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.BackoffStrategy.prototype.hasBaseInterval = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration max_interval = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.core.BackoffStrategy.prototype.getMaxInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.envoy.api.v2.core.BackoffStrategy} returns this
*/
proto.envoy.api.v2.core.BackoffStrategy.prototype.setMaxInterval = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.envoy.api.v2.core.BackoffStrategy} returns this
 */
proto.envoy.api.v2.core.BackoffStrategy.prototype.clearMaxInterval = function() {
  return this.setMaxInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.BackoffStrategy.prototype.hasMaxInterval = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.envoy.api.v2.core);
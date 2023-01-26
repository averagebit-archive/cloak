// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file service.proto (package cloak.service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message cloak.service.StringMessage
 */
export class StringMessage extends Message<StringMessage> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<StringMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "cloak.service.StringMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StringMessage {
    return new StringMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StringMessage {
    return new StringMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StringMessage {
    return new StringMessage().fromJsonString(jsonString, options);
  }

  static equals(a: StringMessage | PlainMessage<StringMessage> | undefined, b: StringMessage | PlainMessage<StringMessage> | undefined): boolean {
    return proto3.util.equals(StringMessage, a, b);
  }
}


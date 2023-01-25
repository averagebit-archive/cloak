/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "cloak.service";

export interface GetCurrentTimeRequest {
}

export interface GetCurrentTimeResponse {
  currentTime: string;
}

function createBaseGetCurrentTimeRequest(): GetCurrentTimeRequest {
  return {};
}

export const GetCurrentTimeRequest = {
  encode(_: GetCurrentTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCurrentTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrentTimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetCurrentTimeRequest {
    return {};
  },

  toJSON(_: GetCurrentTimeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCurrentTimeRequest>, I>>(base?: I): GetCurrentTimeRequest {
    return GetCurrentTimeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCurrentTimeRequest>, I>>(_: I): GetCurrentTimeRequest {
    const message = createBaseGetCurrentTimeRequest();
    return message;
  },
};

function createBaseGetCurrentTimeResponse(): GetCurrentTimeResponse {
  return { currentTime: "" };
}

export const GetCurrentTimeResponse = {
  encode(message: GetCurrentTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentTime !== "") {
      writer.uint32(10).string(message.currentTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCurrentTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrentTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCurrentTimeResponse {
    return { currentTime: isSet(object.currentTime) ? String(object.currentTime) : "" };
  },

  toJSON(message: GetCurrentTimeResponse): unknown {
    const obj: any = {};
    message.currentTime !== undefined && (obj.currentTime = message.currentTime);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCurrentTimeResponse>, I>>(base?: I): GetCurrentTimeResponse {
    return GetCurrentTimeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCurrentTimeResponse>, I>>(object: I): GetCurrentTimeResponse {
    const message = createBaseGetCurrentTimeResponse();
    message.currentTime = object.currentTime ?? "";
    return message;
  },
};

export interface CloakService {
  GetCurrentTime(
    request: DeepPartial<GetCurrentTimeRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetCurrentTimeResponse>;
}

export class CloakServiceClientImpl implements CloakService {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetCurrentTime = this.GetCurrentTime.bind(this);
  }

  GetCurrentTime(
    request: DeepPartial<GetCurrentTimeRequest>,
    metadata?: grpc.Metadata,
  ): Promise<GetCurrentTimeResponse> {
    return this.rpc.unary(CloakServiceGetCurrentTimeDesc, GetCurrentTimeRequest.fromPartial(request), metadata);
  }
}

export const CloakServiceDesc = { serviceName: "cloak.service.CloakService" };

export const CloakServiceGetCurrentTimeDesc: UnaryMethodDefinitionish = {
  methodName: "GetCurrentTime",
  service: CloakServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetCurrentTimeRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetCurrentTimeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}

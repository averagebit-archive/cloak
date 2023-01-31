// @generated by protoc-gen-connect-web v0.6.0 with parameter "target=ts"
// @generated from file cloak_service/service.proto (package cloak_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { LoginRequest, LoginResponse, StringMessage } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service cloak_service.CloakService
 */
export const CloakService = {
  typeName: "cloak_service.CloakService",
  methods: {
    /**
     * @generated from rpc cloak_service.CloakService.Echo
     */
    echo: {
      name: "Echo",
      I: StringMessage,
      O: StringMessage,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc cloak_service.CloakService.Login
     */
    login: {
      name: "Login",
      I: LoginRequest,
      O: LoginResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;


import { Type } from "@sinclair/typebox";
import { SESSION_LABEL_MAX_LENGTH } from "../../../sessions/session-label.js";
import { GATEWAY_CLIENT_IDS, GATEWAY_CLIENT_MODES } from "../client-info.js";

export const NonEmptyString = Type.String({ minLength: 1 });
export const SessionLabelString = Type.String({
  minLength: 1,
  maxLength: SESSION_LABEL_MAX_LENGTH,
});

// NOTE: Using Type.Unsafe with enum instead of Type.Union([Type.Literal(...)])
// because some JSON schema validators (including iOS) reject anyOf schemas.
// This pattern is required for gateway client schemas to work with mobile apps.
export const GatewayClientIdSchema = Type.Unsafe<
  (typeof GATEWAY_CLIENT_IDS)[keyof typeof GATEWAY_CLIENT_IDS]
>({
  type: "string",
  enum: Object.values(GATEWAY_CLIENT_IDS),
});

export const GatewayClientModeSchema = Type.Unsafe<
  (typeof GATEWAY_CLIENT_MODES)[keyof typeof GATEWAY_CLIENT_MODES]
>({
  type: "string",
  enum: Object.values(GATEWAY_CLIENT_MODES),
});

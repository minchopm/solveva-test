import { Static, Type } from "@sinclair/typebox";

export const dataSchema = Type.Object({
  id: Type.Integer({ minimum: 1 }),
  name: Type.String(),
  value: Type.String(),
  variant: Type.Integer({ minimum: 1, maximum: 3})
});

export type Data = Static<typeof dataSchema>;

import { Static, Type } from "@sinclair/typebox";

export const dataSchema = Type.Object({
  id: Type.Integer({ minimum: 1 }),
  name: Type.String(),
  value: Type.String(),
});

export type Data = Static<typeof dataSchema>;

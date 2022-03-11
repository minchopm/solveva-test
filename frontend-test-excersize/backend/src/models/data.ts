import { Static, Type } from "@sinclair/typebox";

export const dataSchema = Type.Object({
  id: Type.Integer({ minimum: 1 }),
  name: Type.String(),
  value: Type.String(),
  variant: Type.Integer({ minimum: 1, maximum: 3})
});

export const changeDataSchema = Type.Object({
  name: Type.String(),
  value: Type.String(),
  variant: Type.Integer({ minimum: 1, maximum: 3})
});

export type Data = Static<typeof dataSchema>;

export type ChangeData = Static<typeof changeDataSchema>

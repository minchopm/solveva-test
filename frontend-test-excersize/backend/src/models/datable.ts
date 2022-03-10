import { Static, Type } from "@sinclair/typebox";

export const datableSchema = Type.Object({
  id: Type.Number({ minimum: 1 }),
});

export type Datable = Static<typeof datableSchema>;
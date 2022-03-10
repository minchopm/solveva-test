import { Static, Type } from "@sinclair/typebox";

export const pageableSchema = Type.Object({
  page: Type.Integer({ minimum: 0 }),
});

export type Pageable = Static<typeof pageableSchema>;

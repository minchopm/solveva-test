import { Static, Type } from "@sinclair/typebox";
import { dataSchema } from "./data";

export const pageSchema = Type.Object({
  content: Type.Array(dataSchema),
  page: Type.Integer({ minimum: 0 }),
  totalPages: Type.Integer({ minimum: 0 }),
});

export type Page = Static<typeof pageSchema>;

import { Content } from "./content";

export interface Page {
  content: Content[];
  page: number;
  totalPages: number;
}

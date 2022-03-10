import { Controller, GET } from "fastify-decorators";
import { FastifyRequest } from "fastify";
import { Pageable, pageableSchema } from "../models/pageable";
import { Page, pageSchema } from "../models/page";
import { Data, dataSchema } from "../models/data";
import { Static, Type } from "@sinclair/typebox";
import { Datable, datableSchema } from "../models/datable";


const timeout = (time: number) => new Promise((res) => setTimeout(res, time));

const data = new Array(1_000_000).fill(null).map(
  (_, index) =>
    ({
      id: index + 1,
      name: `Data ${index}`,
      value: `Value ${index}`,
    } as Data)
);
const pageSize = 10;

const filterValue = (obj: any, key: string, value: any): Array<Data> => obj.filter((v: any) => v[key] === value);

@Controller("/data")
export class DataController {
  @GET("/", {
    schema: { querystring: pageableSchema, response: { 200: pageSchema } },
  })
  async getData(
    request: FastifyRequest<{ Querystring: Pageable }>
  ): Promise<Page> {
    const { page } = request.query;

    // To not response super fast
    await timeout(1_500);

    const startIndex = page * pageSize;
    const content = data.slice(startIndex, startIndex + pageSize);
    return { content, page, totalPages: data.length / pageSize };
  }

  @GET('/:id', {
    schema: {
      params: datableSchema,
      response: { 200: dataSchema }
    }
  })
  async getDataById(request: FastifyRequest<{ Params: Datable }>): Promise<Data> {
    const { id } = request.params;

    await timeout(1_500);

    const foundData = filterValue(data, 'id', +id) as Array<Data>;

    return foundData.length > 0 ? foundData[0] : {} as Data;
  }
}

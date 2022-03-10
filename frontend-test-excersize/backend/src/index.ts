import "reflect-metadata";

import { fastify } from "fastify";
import { bootstrap } from "fastify-decorators";
import { DataController } from "./controllers/data.controller";
import fastifyOAS from "fastify-oas";

const app = fastify();

app
  .register(fastifyOAS, {
    routePrefix: "/swagger",
    exposeRoute: true,
    swagger: {
      host: "localhost:3000",
      info: {
        title: "Backend",
        description: "Sample backend",
        version: "1.0.0-stable",
      },
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  })
  .register(bootstrap, { controllers: [DataController] });

app.listen("3000", (err) => {
  if (err != null) {
    setImmediate(() => console.error(err));
    process.exit(-1);
  }

  console.log("Backend started and listening on http://localhost:3000");
  console.log("Swagger available at http://localhost:3000/swagger");
});

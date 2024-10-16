import {
  errorHandler
} from "./chunk-TXLTTMLJ.mjs";
import {
  checkIn
} from "./chunk-AGP6NEFW.mjs";
import {
  createEvent
} from "./chunk-I5OFBGEP.mjs";
import "./chunk-F5K5Q4ZF.mjs";
import {
  getAttendeeBadge
} from "./chunk-JFHZTAXC.mjs";
import {
  getEvent
} from "./chunk-ZB2TA3DZ.mjs";
import {
  getEventsAttendees
} from "./chunk-VSFJYXGH.mjs";
import {
  registerForEvent
} from "./chunk-VLXPZGZX.mjs";
import "./chunk-5B4TKFIG.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["aplication/json"],
    produces: ["aplication/json"],
    info: {
      title: "pass-in",
      description: "Especifica\xE7\xE3o da API para o back-end da aplica\xE7\xE3o pass.in construida no NLW Unite da Rocketseat.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventsAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!!!");
});
export {
  app
};

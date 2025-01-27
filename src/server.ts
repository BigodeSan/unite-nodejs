import fastify from 'fastify';

import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifyCors from '@fastify/cors';

import { serializerCompiler, validatorCompiler, jsonSchemaTransform, ZodTypeProvider } from "fastify-type-provider-zod";

import { createEvent } from './routes/create-events';
import { registerForEvent } from './routes/register-for-event';
import { getEvent } from './routes/get-event';
import { getAttendeeBadge } from './routes/get-attendee-badge';
import { checkIn } from './routes/check-in';
import { getEventsAttendees } from './routes/get-events-attendees';
import { errorHandler } from './error-handler';

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*'
})

app.register(fastifySwagger, {
  swagger: {
    consumes: ['aplication/json'],
    produces: ['aplication/json'],
    info: {
      title: 'pass-in',
      description: 'Especificação da API para o back-end da aplicação pass.in construida no NLW Unite da Rocketseat.',
      version: '1.0.0'
    }
  },
  transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs'
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)
app.register(checkIn)
app.register(getEventsAttendees)

app.setErrorHandler(errorHandler)

app.listen({ port : 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server running!!!')
})
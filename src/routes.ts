import { FastifyInstance } from 'fastify'
import { GrandPrixController } from '../src/core/controllers/grandPrixController'

export const setupRoutes = (
  fastify: FastifyInstance,
  controller: GrandPrixController,
) => {
  fastify.get('/grandprix', controller.getAll.bind(controller))
  fastify.get('/grandprix/:id', controller.getById.bind(controller))
  fastify.post('/grandprix', controller.create.bind(controller))
  fastify.put('/grandprix/:id', controller.update.bind(controller))
  fastify.delete('/grandprix/:id', controller.remove.bind(controller))
}

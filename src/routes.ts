import { FastifyInstance } from 'fastify'
import { GrandPrixController } from '../src/core/controllers/grandPrixController'
import { PracticeController } from './core/controllers/practiceController'

export const setupGrandPrixRoutes = (
  fastify: FastifyInstance,
  controller: GrandPrixController,
) => {
  fastify.get('/grandprix', controller.getAll.bind(controller))
  fastify.get('/grandprix/:id', controller.getById.bind(controller))
  fastify.post('/grandprix', controller.create.bind(controller))
  fastify.put('/grandprix/:id', controller.update.bind(controller))
  fastify.delete('/grandprix/:id', controller.remove.bind(controller))
}

export const setupPracticeRoutes = (
  fastify: FastifyInstance,
  controller: PracticeController,
) => {
  fastify.get('/practice', controller.getAll.bind(controller))
  fastify.get('/practice/:id', controller.getById.bind(controller))
  fastify.post('/practice', controller.create.bind(controller))
  fastify.put('/practice/:id', controller.update.bind(controller))
  fastify.delete('/practice/:id', controller.remove.bind(controller))
}

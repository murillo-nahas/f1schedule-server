import cors from '@fastify/cors'
import Fastify from 'fastify'
import { GrandPrixController } from './core/controllers/grandPrixController'
import {
  setupGrandPrixRoutes,
  setupPracticeRoutes,
  setupSprintRaceRoutes,
} from './routes'
import { GrandPrixRepository } from './core/repositories/grandPrixRepository'
import { PracticeController } from './core/controllers/practiceController'
import { PracticeRepository } from './core/repositories/practiceRepository'
import { SprintRaceRepository } from './core/repositories/sprintRaceRepository'
import { SprintRaceController } from './core/controllers/sprintRaceController'

const fastify = Fastify({
  logger: true,
})

fastify.register(cors, {
  origin: '*',
})

const grandPrixRepository = new GrandPrixRepository()
const practiceRepository = new PracticeRepository()
const sprintRaceRepository = new SprintRaceRepository()

const grandPrixController = new GrandPrixController(grandPrixRepository)
const practiceController = new PracticeController(practiceRepository)
const sprintRaceController = new SprintRaceController(sprintRaceRepository)

setupGrandPrixRoutes(fastify, grandPrixController)
setupPracticeRoutes(fastify, practiceController)
setupSprintRaceRoutes(fastify, sprintRaceController)

const start = async () => {
  try {
    await fastify.listen(3000)
    console.log('Server running at http://localhost:3000/')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()

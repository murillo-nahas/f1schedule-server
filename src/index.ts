import Fastify from 'fastify'
import { GrandPrixController } from './core/controllers/grandPrixController'
import { setupGrandPrixRoutes, setupPracticeRoutes } from './routes'
import { GrandPrixRepository } from './core/repositories/grandPrixRepository'
import { PracticeController } from './core/controllers/practiceController'
import { PracticeRepository } from './core/repositories/practiceRepository'

const fastify = Fastify({
  logger: true,
})

const grandPrixRepository = new GrandPrixRepository()
const practiceRepository = new PracticeRepository()

const grandPrixController = new GrandPrixController(grandPrixRepository)
const practiceController = new PracticeController(practiceRepository)

setupGrandPrixRoutes(fastify, grandPrixController)
setupPracticeRoutes(fastify, practiceController)

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

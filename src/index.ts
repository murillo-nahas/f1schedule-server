import Fastify from 'fastify'
import { GrandPrixController } from './core/controllers/grandPrixController'
import { setupRoutes } from './routes'
import { GrandPrixRepository } from './core/repositories/grandPrixRepository'

const fastify = Fastify({
  logger: true,
})

const grandPrixRepository = new GrandPrixRepository()

const grandPrixController = new GrandPrixController(grandPrixRepository)

setupRoutes(fastify, grandPrixController)

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

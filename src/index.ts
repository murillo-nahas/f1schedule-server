import Fastify from 'fastify'

const fastify = Fastify({
  logger: true,
})

fastify.get('/', (request, reply) => {
  return { hello: 'world' }
})

try {
  fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

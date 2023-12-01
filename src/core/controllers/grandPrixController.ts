import { FastifyReply, FastifyRequest } from 'fastify'
import { GrandPrixRepository } from '../repositories/grandPrixRepository'
import { GrandPrix } from '../models/grandPrixModel'

export class GrandPrixController {
  constructor(private readonly grandPrixRepository: GrandPrixRepository) {}

  async getAll(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const grandPrixList = await this.grandPrixRepository.getAll()
    reply.send(grandPrixList)
  }

  async getById(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { id } = request.params as { id: string }

    const grandPrix = await this.grandPrixRepository.getById(parseInt(id))

    if (!grandPrix) {
      reply.status(404).send({ message: 'ID not found!' })
      return
    }

    reply.status(200).send(grandPrix)
  }

  async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const newGrandPrix = await this.grandPrixRepository.create(
      request.body as GrandPrix,
    )

    reply.status(201).send(newGrandPrix)
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string }
      const data = request.body as GrandPrix

      const updatedGrandPrix = await this.grandPrixRepository.update(
        parseInt(id),
        data,
      )

      if (!updatedGrandPrix) {
        reply.status(404).send({ message: 'ID not found!' })
        return
      }

      reply.status(200).send(updatedGrandPrix)
    } catch (error) {
      reply.status(500).send({ message: 'Internal Server Error' })
    }
  }

  async remove(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { id } = request.params as { id: string }

    const grandPrix = await this.grandPrixRepository.remove(parseInt(id))

    if (!grandPrix) {
      reply.status(404).send({ message: 'ID not found!' })
      return
    }

    reply.status(200).send(grandPrix)
  }
}

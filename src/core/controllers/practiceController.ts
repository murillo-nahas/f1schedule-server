import { FastifyReply, FastifyRequest } from 'fastify'
import { PracticeRepository } from '../repositories/practiceRepository'
import { Practice } from '../models/practiceModel'

export class PracticeController {
  constructor(private readonly practiceRepository: PracticeRepository) {}

  async getAll(_: FastifyRequest, reply: FastifyReply): Promise<void> {
    const practiceList = await this.practiceRepository.getAll()
    reply.status(200).send(practiceList)
  }

  async getById(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { id } = request.params as { id: string }

      const practice = await this.practiceRepository.getById(parseInt(id))

      if (!practice) {
        reply.status(404).send({ message: 'ID not found!' })
        return
      }

      reply.status(200).send(practice)
    } catch (error) {
      reply.status(404).send({ message: 'Practice not found.' })
    }
  }

  async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const newPractice = await this.practiceRepository.create(
        request.body as Practice,
      )

      reply.status(201).send(newPractice)
    } catch (error) {
      reply.status(500).send({ message: 'Internal Server Error.' })
    }
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string }
      const data = request.body as Practice

      const updatedPractice = await this.practiceRepository.update(
        parseInt(id),
        data,
      )

      reply.status(200).send(updatedPractice)
    } catch (error) {
      reply.status(404).send({ message: 'Practice not found.' })
    }
  }

  async remove(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { id } = request.params as { id: string }

      await this.practiceRepository.remove(parseInt(id))

      reply.status(204)
    } catch (error) {
      reply.status(404).send({ message: 'Practice not found.' })
    }
  }
}

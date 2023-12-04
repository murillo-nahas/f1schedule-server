import { FastifyReply, FastifyRequest } from 'fastify'
import { SprintRaceRepository } from '../repositories/sprintRaceRepository'
import { SprintRace } from '../models/sprintRaceModel'

export class SprintRaceController {
  constructor(private readonly sprintRaceRepository: SprintRaceRepository) {}

  async getAll(_: FastifyRequest, reply: FastifyReply): Promise<void> {
    const sprintRaceList = await this.sprintRaceRepository.getAll()
    reply.status(200).send(sprintRaceList)
  }

  async getById(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { id } = request.params as { id: string }

      const sprintRace = await this.sprintRaceRepository.getById(parseInt(id))

      if (!sprintRace) {
        reply.status(404).send({ message: 'ID not found!' })
        return
      }

      reply.status(200).send(sprintRace)
    } catch (error) {
      reply.status(404).send({ message: 'Sprint Race not found.' })
    }
  }

  async create(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const newSprintRace = await this.sprintRaceRepository.create(
        request.body as SprintRace,
      )

      reply.status(201).send(newSprintRace)
    } catch (error) {
      reply.status(500).send({ message: 'Internal Server Error.' })
    }
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string }
      const data = request.body as SprintRace

      const updatedSprintRace = await this.sprintRaceRepository.update(
        parseInt(id),
        data,
      )

      reply.status(200).send(updatedSprintRace)
    } catch (error) {
      reply.status(404).send({ message: 'Sprint Race not found.' })
    }
  }

  async remove(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { id } = request.params as { id: string }

      await this.sprintRaceRepository.remove(parseInt(id))

      reply.status(204)
    } catch (error) {
      reply.status(404).send({ message: 'Sprint Race not found.' })
    }
  }
}

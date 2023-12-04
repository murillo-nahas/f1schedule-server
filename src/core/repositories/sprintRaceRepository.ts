import { PrismaClient } from '@prisma/client'
import { SprintRace } from '../models/sprintRaceModel'

const prisma = new PrismaClient()

export class SprintRaceRepository {
  async getAll(): Promise<SprintRace[]> {
    return prisma.sprintRace.findMany()
  }

  async getById(id: number): Promise<SprintRace | null> {
    return prisma.sprintRace.findUnique({ where: { id } })
  }

  async create(data: SprintRace): Promise<SprintRace> {
    return prisma.sprintRace.create({ data })
  }

  async update(id: number, data: SprintRace): Promise<SprintRace | null> {
    return prisma.sprintRace.update({ where: { id }, data })
  }

  async remove(id: number): Promise<SprintRace | null> {
    return prisma.sprintRace.delete({ where: { id } })
  }
}

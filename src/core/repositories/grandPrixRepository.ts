import { PrismaClient } from '@prisma/client'
import { GrandPrix } from '../models/grandPrixModel'

const prisma = new PrismaClient()

export class GrandPrixRepository {
  async getAll(): Promise<GrandPrix[]> {
    return prisma.grandPrix.findMany()
  }

  async getById(id: number): Promise<GrandPrix | null> {
    return prisma.grandPrix.findUnique({ where: { id } })
  }

  async create(data: GrandPrix): Promise<GrandPrix> {
    return prisma.grandPrix.create({ data })
  }

  async update(id: number, data: GrandPrix): Promise<GrandPrix | null> {
    return prisma.grandPrix.update({ where: { id }, data })
  }

  async remove(id: number): Promise<GrandPrix | null> {
    return prisma.grandPrix.delete({ where: { id } })
  }
}

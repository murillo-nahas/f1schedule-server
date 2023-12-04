import { PrismaClient } from '@prisma/client'
import { Practice } from '../models/practiceModel'

const prisma = new PrismaClient()

export class PracticeRepository {
  async getAll(): Promise<Practice[]> {
    return prisma.practice.findMany()
  }

  async getById(id: number): Promise<Practice | null> {
    return prisma.practice.findUnique({ where: { id } })
  }

  async create(data: Practice): Promise<Practice> {
    return prisma.practice.create({ data })
  }

  async update(id: number, data: Practice): Promise<Practice | null> {
    return prisma.practice.update({ where: { id }, data })
  }

  async remove(id: number): Promise<Practice | null> {
    return prisma.practice.delete({ where: { id } })
  }
}

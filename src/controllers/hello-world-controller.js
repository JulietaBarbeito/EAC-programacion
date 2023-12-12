import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const helloworld = async (req, res) => {
    const jugadores = await prisma.Jugador.findMany()
    res.json(jugadores)
};

export {helloworld}
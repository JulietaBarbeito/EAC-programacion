import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const helloworld = async (req, res) => {
    const jugadores = await prisma.Jugador.findMany()
    res.json(jugadores)
};

const player = async (req, res) => {
    const{lastname, firstname, team}= req.body;
    try{
    const jugadores = await prisma.Jugador.create({
        date: {
            lastname ,
            firstname,
            team 
        }
       
    }) 
    
    res.json(jugadores)
    }
};

const deleteplayer = async (req, res) => {
    const jugadores = await prisma.Jugador.daleteMany()
    res.json(jugadores)
};


export {helloworld, player, deleteplayer}
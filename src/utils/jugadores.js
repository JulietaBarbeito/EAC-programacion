import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const player = await prisma.Jugador.createMany({
    data: [
        { lastname: 'Rochet', firstname: 'Sergio', team:'Internacional (BRA)' },
        {  lastname: 'Israel', firstname: 'Franco', team:'Sporting CP (POR)' },
        {  lastname: 'Mele', firstname: 'Santiago', team:'Junior (COL)' },
        {  lastname: 'Araujo', firstname: 'Ronald', team:' FC Barcelona (ESP)' },
        {  lastname: 'Giménez', firstname: 'José María', team:'  Atlético de Madrid (ESP)' },
        {  lastname: 'Cáceres', firstname: 'Sebastián ', team:'  América (MEX)' },
        {  lastname: 'Viña', firstname: 'Matías  ', team:' Sassuolo (ITA)' },
        {  lastname: 'Méndez', firstname: 'Bruno ', team:'Corinthians (BRA)' },
        {  lastname: 'Olivera', firstname: 'Mathías ', team:'Napoli (ITA)' },
        {  lastname: 'Ugarte', firstname: 'Manuel  ', team:'PSG (FRA)' },
        {  lastname: 'Bentancur', firstname: 'Rodrigo  ', team:'Tottenham Hotspur (ENG)' },
        {  lastname: 'Valverde', firstname: 'Federico  ', team:' Real Madrid (ESP)' },
        {  lastname: 'Carballo', firstname: 'Felipe ', team:'Gremio (BRA)' },
        {  lastname: 'Canobbio', firstname: 'Agustín ', team:' Atletico Paranaense (BRA)'},
        {  lastname: 'de la Cruz', firstname: 'Nicolás', team:' Atletico Paranaense (BRA)'},
        {  lastname: 'De Arrascaeta', firstname: 'Giorgian ', team:' Flamengo (BRA)'},
        {  lastname: 'Pellistri ', firstname: 'Facundo ', team:' Manchester United (GBR)'},
        {  lastname: ' Araújo ', firstname: 'Maximiliano ', team:' Toluca (MEX)'},
        {  lastname: ' Torres', firstname: 'Facundo  ', team:' Orlando City (USA)'},
        {  lastname: ' Olivera ', firstname: 'Cristian  ', team:' Los Ángeles F.C (USA)'},
        {  lastname: ' Viñas ', firstname: 'Federico  ', team:' León (MEX)'},
        {  lastname: 'Núñez', firstname: 'Darwin ', team:' Liverpool FC (ENG'},
        {  lastname: 'Suárez', firstname: 'Luis ', team:' Gremio (BRA)'},


        
        
        
    ]
    

   })
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const read = async (req, res) => {
    if (req.params.id !== undefined) {
        const comentario = await prisma.comentario.findMany({
            where: {
                perfil: parseInt(req.params.id)
            }
        });
        return res.json(comentario);
    } else {
        const comentarios = await prisma.comentario.findMany({
            where: {
                ativo: 1
            }
        });
        return res.json(comentarios);
    }
};

module.exports = {
    read
};
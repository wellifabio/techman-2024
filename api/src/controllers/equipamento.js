const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const read = async (req, res) => {
    if (req.params.id !== undefined) {
        const equipamento = await prisma.equipamento.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.json(equipamento);
    } else {
        const equipamentos = await prisma.equipamento.findMany({
            where: {
                ativo: 1
            }
        });
        return res.json(equipamentos);
    }
};

const del = async (req, res) => {
    const equipamento = await prisma.equipamento.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            ativo: 0
        }
    });
    return res.json(equipamento);
};

module.exports = {
    read,
    del
};
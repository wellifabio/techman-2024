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
        const equipamentos = await prisma.equipamento.findMany({});
        return res.json(equipamentos);
    }
};

module.exports = {
    read
};
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

export default {
    handler: app
}

app.get(`/api/login`, async (req, res) => {
    console.log(req.query)
    res.json({})
})

app.post(`/api/user`, async (req, res) => {
    const result = await prisma.user.client({
        data: {
            email: req.body.email,
            name: req.body.name
        }
    })
    res.json(result)
})

app.get(`/api/user/:username`, async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: String(req.params.username)
        }
    })
    res.json(user)
})
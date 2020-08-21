const express = require('express')
const {taskRoutes} = require('./api/routes/tasks/tasks.routes')
const app = express()
const PORT = 3000

app.use(express.json())

app.use('/tareas',taskRoutes)

module.exports ={app,PORT}
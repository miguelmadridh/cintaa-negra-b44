const express = require("express");

const taskRoutes = express.Router();

let tareas =[];
taskRoutes.get("/", (req, res) => {
  res.status(200).json({ message: tareas });
});

taskRoutes.post("/",(req,res)=>{
    const tarea = req.body
    tareas.push(tarea)
    res.status(201).json({response:"Tarea Creada",tareas:tareas})
})


taskRoutes.delete("/:id",(req,res)=>{
    const tarea = req.params
    tareas.splice(tareas[tarea],1)
    res.status(201).json({response:"Tarea Borrada",tareas:tareas})
})

taskRoutes.put("/:id",(req,res)=>{
    const tarea = req.params
    tareas[tarea] = req.body.message
    res.status(201).json({response:"Tarea Borrada",tareas:tareas})
})
module.exports = { taskRoutes };

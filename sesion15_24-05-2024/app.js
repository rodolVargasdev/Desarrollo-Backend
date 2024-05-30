const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')

app.use(cors())
app.use(express.json())

let tasks = []

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    }
    tasks.push(newTask)
    res.status(201).json(newTask)
})

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const task = tasks.find(t => t.id === taskId)
    if (task) {
        res.json(task)
    } else {
        res.status(404).send('No se encontró la tarea')
    }
})

// Ruta PUT corregida
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const task = tasks.find(t => t.id === taskId)
    if (task) {
        task.title = req.body.title || task.title
        task.completed = req.body.completed !== undefined ? req.body.completed : task.completed
        res.json(task)
    } else {
        res.status(404).send('No se actualizó la tarea')
    }
})

app.patch("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        if (req.body.title !== undefined) {
            task.title = req.body.title;0
        }
        if (req.body.completed !== undefined) {
            task.completed = req.body.completed;
        }
        res.json(task);
    } else {
        res.status(404).send("No se encontró la tarea");
    }
})

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const taskIndex = tasks.findIndex(t => t.id === taskId)
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1)
        res.status(204).send('Registro eliminado')
    } else {
        res.status(404).send('No se eliminó la tarea')
    }
})

app.listen(port, () => {
    console.log(`Servidor corriendo en la URL http://localhost:${port}`)
})


// const express = require('express')
// const app = express()
// const port = 4000
// const cors = require('cors')

// app.use(cors())
// app.use(express.json())

// let tasks = []

// app.get('/tasks', (req, res) => {
//     res.json(tasks)
// })

// app.post('/tasks', (req, res) => {
//     const newTask = {
//         id: tasks.length +1,
//         title: req.body.title,
//         completed: false
//     }
//     tasks.push(newTask)
//     res.status(201).json(newTask)
// })

// app.get('/tasks/:id', (req, res) =>{
//     const taskId = parseInt(req.params.id)
//     const task = tasks.find(t=>t.id === taskId)
//     if(task){
//         res.json(task)
//     }else{
//         res.status(404).send('No se encontró la tarea')
//     }
// })

// app.put('/task/:id', (req, res) => {
//     const taskId = parseInt(req.params.id)
//     const task = tasks.find(t=> t.id === taskId)
//     if(task)
//         {
//             task.title=req.body.title || task.title
//             task.completed = req.body.completed !== undefined ? req.body.completed: task.completed
//             res.json(task)
//         }else{
//             res.status(404).send('No se actualizó la tarea')
//         }
// })

// app.patch("/tasks/:id", (req, res) => {
//     const taskid = parseInt(req.params.id);
//     const task = tasks.find(t => t.id === taskid);
//     if (task) {
//       if (req.body.title !== undefined) {
//         task.title = req.body.title;
//       }
//       if (req.body.completed !== undefined) {
//         task.completed = req.body.completed;
//       }
//       res.json(task);
//     } else {
//       res.status(404).send("No se encontro la tarea");
//     }
//   });


// app.delete('/tasks/:id', (req, res) => {
//     const taskId = parseInt(req.params.id)
//     const taskIn = tasks.findIndex(t => t.id === taskId)
//     if(taskIn !== -1){
//         tasks.splice(taskIn,1)
//         res.status(204).send('Registro eliminado')
//     }else{
//         res.status(404).send('No se eliminó la tarea')
//     }
// })

// app.listen(port, () => {
//     console.log(`Servidor corriendo en la URL http://localhost:${port}`)
// })
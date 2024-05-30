
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  useEffect(() => {
    fetchTasks()
  }, [])

  // Método GET
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/tasks')
      setTasks(response.data)
    } catch (error) {
      console.error('Error al recuperar las tareas', error)
    }
  }

  // Método POST
  const createTask = async () => {
    try {
      const response = await axios.post('http://localhost:4000/tasks', { title: newTaskTitle })
      setTasks([...tasks, response.data])
      setNewTaskTitle('')
    } catch (error) {
      console.error('Error al crear la tarea', error)
    }
  }

  // Método PUT
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(`http://localhost:4000/tasks/${id}`, updatedTask)
      setTasks(tasks.map(task => (task.id === id ? response.data : task)))
    } catch (error) {
      console.error('Error al modificar la tarea', error)
    }
  }

  // Método de eliminación
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/tasks/${id}`)
      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      console.error('Error al eliminar la tarea', error)
    }
  }

  // Manejar el cambio del título de la tarea localmente
  const handleTaskTitleChange = (id, title) => {
    const updatedTasks = tasks.map(task => (task.id === id ? { ...task, title } : task))
    setTasks(updatedTasks)
  }

  return (
    <>
      <div>
        <h1>Administrador de tareas</h1>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={createTask}>Agregar tarea</button>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input
                type="text"
                value={task.title}
                onChange={(e) => handleTaskTitleChange(task.id, e.target.value)}
                onBlur={() => updateTask(task.id, { title: task.title })}
              />
              <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import './App.css'

// function App() {

//     const [tasks, setTasks]= useState([])
//     const [newTaskTtitle, setNewTaskTitle]= useState('')
   
//   useEffect(() =>{
//     fetchTasks()
//   }, [])
   
//   //metodo get
   
//   const fetchTasks = async () =>{
//     try{
//        const response = await axios.get('http://localhost:4000/tasks')
//        setTasks(response.data)
   
//     }catch (error){
//       console.error('Errpr al recuperar las tareas', error)
//     }
//   }
   
//   // metodo post
//   const createTasks = async() =>{
//     try{
//         const response = await axios.post('http://localhost:4000/tasks', {title:newTaskTtitle})
//         setTasks([...tasks, response.data])
//         setNewTaskTitle('')
//     }catch (error){
//       console.error('Error al crear la tarea', error)
//     }
//   }
   
//   //metodo update
//   const updateTask = async (id, updateTask) =>{
//     try{
//       const response = await axios.put(`http://localhost:4000/tasks/${id}`, updateTask)
//       setTasks(tasks.map(task => (task.id=== id ? response.data : task )))
//     }catch(error){
//       console.error('Error al modificar la tarea', error)
//     }
//   }
   
//   //metodo de eliminacion
   
//   const deletetask = async (id) =>{
//     try{
//       await axios.delete(`http://localhost:4000/tasks/${id}`)
//       setTasks(tasks.filter(task => task.id !== id))
//     }catch(error){
//       console.error('Error al eliminar la tarea', error)
//     }
//   }

//   return (
//     <>
//       <div>
//         <h1>Administrador de tareas</h1>
//         <input type="text" value={newTaskTtitle} onChange={(e) => setNewTaskTitle(e.target.value)}
//         placeholder="Nueva tarea" />
//         <button onClick={createTasks}>Agregar tarea</button>
//         <ul>
//             {tasks.map(task => (
//               <li key={task.id}>
//                 <input type="text" value={task.title} onChange={(e) => updateTask(task.id, { title: e.target.value})}/>
//                 <button onClick={() => deletetask(task.id)}>Eliminar</button>
//               </li>
//             ))}
    
//         </ul>
//       </div>
//     </>
//   )

// }


  


// export default App



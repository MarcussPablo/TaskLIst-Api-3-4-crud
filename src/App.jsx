import { useEffect } from "react"
import { useState } from "react"
import Tasklist from "./components/Tasklist/TaskList"
import GetData from "./services/GetData/GetData"

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
      GetData()
      .then(data => setTasks(data))
  }, [])

const handledelete =(id)=>{
  fetch('https://jsonplaceholder.typicode.com/todos/${id}',{
    method:'DELETE',
  })
  .then(res=>{
    if(res.ok){
      setTasks(prev=>prev.filter(task=>task.id !== id))
    }else{
      throw new Error("erro ao fazer fetch")
    }
  })
  .catch(err =>{
    console.error(err)
  })
} 
const handleEdit= (id) =>{
  const newTitle = prompt('Qual a nova tarefa?')
  if(!newTitle) return
  fetch('https://jsonplaceholder.typicode.com/todos/${id}',{
    method:'PATCH',
    headers:{'Content-Type':"application/json"},
    body:JSON.stringify({
      title:newTitle
    })
  })
  .then(res=>res.json())
  .then(data =>{
    setTasks(prev => prev.map(task =>
      task.id === id ? {...task, title:data.title} : task 
    ))
  })
}

  return (
    <div className="container-fluid pb-5 sm-scroll bg-black bg-gradient rounded text-light ">
<h1 className="text-center p-3 ">Task-list-Api</h1>
<div className="row rounded-5  bg-dark align-items-center justify-content-center">

  
{tasks.map((task, index)=>(
      <Tasklist task={task} key={index}
      handleEdit={handleEdit}
      handledelete={handledelete}
      />
    ))}
</div>
</div>
  )
}

export default App


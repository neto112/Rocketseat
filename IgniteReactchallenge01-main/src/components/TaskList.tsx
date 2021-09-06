import { useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

interface Error {
  type:string;
  message:string
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [error, setError] = useState<Error[]>([])

  function handleCreateNewTask() {
   if(!newTaskTitle){
     setError([])
      const newError = {
        type:'error',
        message:'Título da atívidade de preenchimento obrigatório'
      }
      setError(oldState => [...oldState, newError])
      return
   }
   const TaskExist = tasks.filter(item => item.title ===newTaskTitle)

   
   if(TaskExist.length >0){
     setError([])
    const newError = {
      type:'error',
      message:'Já existe uma atividade com este título'
    }
    setError(oldState => [...oldState, newError])

     return;
   }

   const newTask = {
     id:Math.random(),
     title: newTaskTitle,
     isComplete: false
   }
   setError([])
   setTasks(oldState =>[...oldState,newTask])
   setNewTaskTitle('')

   } 
  

  function handleToggleTaskCompletion(id: number) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    const newTasks = tasks.map(item => item.id === id ? {...item, isComplete:!item.isComplete}:item)
    setTasks(newTasks)
    
  }

  function handleRemoveTask(id: number) {
    // Remova uma task da listagem pelo ID
    const filteredTasks = tasks.filter(item =>item.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        {!!error &&<div className={error[0]?.type}>{error[0]?.message}</div>}
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}
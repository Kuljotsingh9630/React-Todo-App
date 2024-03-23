//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoListItem from './TodoListItem';


var count = 1
function App() 
{
 const [selectedFilter, setSelectedFilter] = useState ("incomplete")
 const [editingFlag,setEdiitngFlag] = useState(-1)
   var [todo,setTodo] = useState([
    {
    id: count++, 
    title: "Todo 1",
    completed: false
    },
    {
      id: count++, 
      title: "Todo 2",
      completed: true
      },
      {
        id: count++, 
        title: "Todo 3",
        completed: false
        }
   ])
  const addTodo = () =>
  {
    console.log ("Todo Add")

    const todoText = document.getElementById("todoInput").value
      let todoObject = 
      {
        id: count++,
        title:todoText,
        completed: false
        
      }
    console.log ("todoText: "+todoText)
    todo.push(todoObject)
    setTodo([...todo])
  }

 
  const handleFilter = (filterType) =>
  {
    switch(filterType)
    {
      case "incomplete":
      console.log ("incomplete executed")
      setSelectedFilter("incomplete")
      break;
    
    
      case "completed":
      console.log ("completed executed")
      setSelectedFilter("completed")
      break;
    
    
      case "all":
      console.log ("all executed")
      setSelectedFilter("all")
      break;
      default:
  }
  }
  const deleteTodo = (id) =>
  {
    console.log ("Todo Deleted id: ",id)

    todo = todo.filter(todoTemp => 
      {
        if(id === todoTemp.id)
        {
         return false
        }
        else
        {
          return true 
        }
      })
    setTodo([...todo])
  }
  const checkedChange = (id) =>
  {
    console.log ("checked change id:",id)

    todo = todo.map(todoTemp =>
      {
        if(id === todoTemp.id)
        {
         todoTemp.completed = !todoTemp.completed
        }
        return todoTemp
  })
       setTodo([...todo])
  }
  const editedTodo = (id) =>
  {
    console.log ("Edit Todo")
    setEdiitngFlag(id)
  }
  const saveEditedTodo = (id) =>
  {
    console.log ("Todo Saved id",id)
    let updatedTodoText = document.getElementById("editingtodo").value
    todo.map(todoTemp =>
      {
        if(todoTemp.id === id)
        {
          todoTemp.title = updatedTodoText
        }
        return todoTemp
      })
      setTodo([...todo])
      setEdiitngFlag(-1)
    
  }
  return (
    <div>
    <h2 id='heading'>TODO APP</h2>
    <div>
    <label onClick={()=>handleFilter("incomplete")}>Incomplete</label>|
    <label onClick={()=>handleFilter("completed")}>Completed</label>|
    <label onClick={()=>handleFilter("all")}>All</label>
    </div>
    <input id='todoInput' type='text' placeholder='Enter Your Todo Name'/>
    <button onClick={addTodo} class="btn btn-primary">Add</button>
    
    
     {todo.map(todoTemp =>
      {
        switch(selectedFilter)
    {
      case "incomplete":
      if(!todoTemp.completed)
      {
      return <TodoListItem
      todoTemp ={todoTemp}
      editingFlag={editingFlag}
      checkedChange= {checkedChange}
      deleteTodo={deleteTodo}
      saveEditedTodo={saveEditedTodo}
      editedTodo={editedTodo}
      />
      }
      break;
    
    
      case "completed":
        if(todoTemp.completed)
        {
          return <TodoListItem
          todoTemp ={todoTemp}
          editingFlag={editingFlag}
          checkedChange= {checkedChange}
          deleteTodo={deleteTodo}
          saveEditedTodo={saveEditedTodo}
          editedTodo={editedTodo}
          />
        }
      
      break;
    
    
      case "all":
        
        return <TodoListItem
        todoTemp ={todoTemp}
        editingFlag={editingFlag}
        checkedChange= {checkedChange}
        deleteTodo={deleteTodo}
        saveEditedTodo={saveEditedTodo}
        editedTodo={editedTodo}
        />
      
      break;
      default:
  }

       
      
      
      })} 
    </div>
    
  );
}

export default App;

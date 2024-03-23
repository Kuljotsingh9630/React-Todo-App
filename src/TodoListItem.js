const TodoListItem = (props) =>
{
    console.log ("props:",props)

    return <div key= {props.todoTemp.id}>
    {props.todoTemp.completed === true ?//condition
 <><input type='checkbox' checked onChange={()=>props.checkedChange(props.todoTemp.id)}/>
  <s>{props.todoTemp.title}</s></>://if execution

  //else execution
  <><input type='checkbox' onChange={()=>props.checkedChange(props.todoTemp.id)}/>
  {
   props.editingFlag === props.todoTemp.id ?
   <>
   <input id='editingtodo' type='text' defaultValue={props.todoTemp.title}/>
   <button onClick={()=>props.deleteTodo(props.todoTemp.id)}>Delete</button>
    <button onClick={()=>props.saveEditedTodo(props.todoTemp.id)}>Save</button>
   </>:
   <>{props.todoTemp.title}
      <button onClick={()=>props.deleteTodo(props.todoTemp.id)}>Delete</button>
      <button onClick={()=>props.editedTodo(props.todoTemp.id)}>Edit</button>
   </> 
 }
  
    </>
     
   }
      
      
     </div> 
}
export default TodoListItem;
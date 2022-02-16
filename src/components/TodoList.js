import React from 'react'
const TodoList = (props) => {
  return (
    <form className="container border border-blue  mt-5" >
        {
         props.todos.map(todo=>{
            
            return (
              <>

                <h5>Tittle:   {todo.title}</h5>
                <p>Description: {todo.description}</p>
               
              </>
            )
          })
        }
    
    </form>
  )
}

export default TodoList
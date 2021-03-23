import React, { useState, useEffect } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import { fetchData } from "./functions"
import { Card } from "@material-ui/core"

function TodoList() {
  const [allTodos, setAllTodos] = useState([])

  useEffect(() => {
    fetchData(setAllTodos)
  }, [])

  return (
    <div>
      <TodoForm setAllTodos={setAllTodos} />

      {allTodos.map((elem) => (
        <TodoItem
          key={elem._id}
          name={elem.name}
          completed={elem.completed}
          date={elem.addedDate}
          id={elem._id}
          allTodos={allTodos}
          setAllTodos={setAllTodos}
        />
      ))}
    </div>
  )
}

export default TodoList

/*      .then(resp =>  if(!response.ok){
          if(response.status >= 400 && response.status < 500){
              return response.json().then(data=>{
                  const err ={errorMessage: data.message}
                  throw err
              })
          }
      }) */

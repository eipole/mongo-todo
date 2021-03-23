import { Button, TextField } from "@material-ui/core"
import React, { useRef, useState } from "react"
import { postData } from "./functions"

function TodoForm({ setAllTodos }) {
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef()

  async function addTodoState(value) {
    const uustudu = await postData(value)
    setAllTodos((prev) => [...prev, uustudu])
  }

  function handleSubmit(event) {
    event.preventDefault()
    addTodoState(inputValue)
    setInputValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        fullWidth
        type="string"
        placeholder="Write todo"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        ref={inputRef}
      />

      <button>Submit</button>
    </form>
  )
}
export default TodoForm

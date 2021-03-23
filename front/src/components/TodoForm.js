import { Button, makeStyles, TextField, Typography } from "@material-ui/core"
import React, { useRef, useState } from "react"
import { postData } from "./functions"
import { isTextValid } from "../utils/validate"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2)
  }
}))

function TodoForm({ setAllTodos }) {
  const classes = useStyles()
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef()
  const validInput = isTextValid(inputValue)
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
    <form className={classes.container} onSubmit={handleSubmit}>
      <Typography
        color="primary"
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
      >
        Hvad kan man gjæra?
      </Typography>
      <TextField
        autoFocus
        fullWidth
        type="string"
        placeholder="Write todo"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        ref={inputRef}
      />
      <Button disabled={!validInput} type="submit" color="primary">
        Submit
      </Button>
      {/* {validInput && <button>Submit</button>} */}
    </form>
  )
}
export default TodoForm

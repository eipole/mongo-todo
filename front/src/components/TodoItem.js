import {
  Button,
  CardContent,
  Typography,
  Card,
  makeStyles
} from "@material-ui/core"
import React from "react"
import { deleteTodo, toggleTodo } from "./functions"

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2)
  },
  songInfoContainer: {
    display: "flex",
    alignItems: "center"
  },
  songInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  carditem: {
    background: theme.palette.primary.light
  },
  strike: {
    textDecoration: "line-through",
    color: theme.palette.secondary.light
  }
}))

async function handleDelete(id, array, func) {
  await deleteTodo(id)
  const removed = array.filter((elem) => elem._id !== id)
  func(removed)
}
async function handleToggle(id, completed, allTodos, setAllTodos) {
  const response = await toggleTodo(id, completed)
  const newtodos = allTodos.map((elem) =>
    elem._id === response._id ? { ...elem, completed: !elem.completed } : elem
  )
  setAllTodos(newtodos)
}

function TodoItem({ name, completed, id, date, allTodos, setAllTodos }) {
  const classes = useStyles()
  return (
    <Card className={classes.container}>
      <CardContent className={classes.carditem}>
        <span
          onClick={() => handleToggle(id, completed, allTodos, setAllTodos)}
        >
          <h2 className={`${completed && classes.strike}`}>{name}</h2>
        </span>
        <p>Added on {date} </p>
        <Button
          color="secondary"
          onClick={() => handleDelete(id, allTodos, setAllTodos)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  )
}
export default TodoItem

/* async function handleToggle(id, completed, allTodos, setAllTodos) {
  const response = await toggleTodo(id, completed)
  const newtodos = allTodos.filter((elem, i) => elem._id !== response._id)
  setAllTodos([...newtodos, response])
} */

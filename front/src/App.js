import { Container, Paper } from "@material-ui/core"
import React from "react"
import TodoList from "./components/todolist"

// export const TodoContext = createContext()

function App() {
  return (
    // <TodoContext.Provider value={}>
    <Container maxWidth="xs">
      <Paper elevation={3}>
        <TodoList />
      </Paper>
    </Container>
    // </TodoContext.Provider>
  )
}

export default App

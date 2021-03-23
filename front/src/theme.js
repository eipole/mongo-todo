import { createMuiTheme } from "@material-ui/core/styles"
import { teal, purple } from "@material-ui/core/colors"
import { green } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: teal,
    secondary: purple
  }
})

export default theme

/* const theme = createMuiTheme({
  palette: {
    primary:{
      main: "#70cfbd"
    } ,
    secondary: {
      main: "#70a5cf"
    }
  }
}) */
// no {main:} if using colors from defaults
/* palette: {
  primary: teal
  secondary: purple,
} */

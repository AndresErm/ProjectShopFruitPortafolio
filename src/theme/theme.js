import {
  orange,
  grey,
  green,
  red
} from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";



export const newTheme = createTheme({
  palette: {
    primary: {
      main: "#FF8A23",
      dark: red[200],   /**Usar Este color para ubicar los contenedores*/
    },
    secondary: {
      main: green[500]
    },
    text: {
      primary: orange[500],
      secondary: grey[50] 
    },
    background: {
      default: grey[50], 
    },
  },
  
  typography: {
    fontFamily: "fantasy",

  },
});

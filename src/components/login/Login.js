import React, { useEffect } from "react";
import { Button, TextField, makeStyles, Box } from "@material-ui/core";
// import { createTheme } from "@material-ui/core";
import { useForm } from "../../hooks/useForm";
import { CreateNewAccount } from "../createNewAccount/CreateNewAccount";
import { RecoveryPassword } from "../RecoveryPassword/RecoveryPassword";
import { AppRouter } from "../../routes/AppRouter";
import { Link } from "react-router-dom";
import '../login/background.css'


const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "auto",
    display: "flex",
    alignItems: "flex-end",
    justifyContent:"center",
  },

  contentLogin: {
    display: "flex",
    flexDirection: "column",
    minWidth: 439, //420
    height: 369, //380
    backgroundColor: theme.palette.background.default,
    marginTop: 115,
    borderRadius: 15,
    [theme.breakpoints.down("sm")]: {
      width: 360,
      height: 640,
      marginTop: -5,   
    },
  },
  inputsLogin: {
    display: "flex",
    flexDirection: "column",
    marginTop: 35,
    minHeight: "auto",
    minWidth: 300,
    color: theme.palette.primary.main,
    borderRadius: 15,
  },
  routeDecoration: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    width: 175,
    height: -50,
  },
  btnLogin:{
    marginBottom: 5,
    marginTop: 25,
    width: 150,
    height: 50,
    marginLeft: 67,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[50],
    borderRadius: 10,
  },
  btnRouteOne: {
    marginTop: 10,
    marginInlineStart: "-7%",
    width: 180,
    height: 35,
  },
  btnRouteTwo: {
    marginBottom: 25,
    marginTop: 7,
    marginInlineStart: "-6%",
    width: 180,
    height: 35,
  },
}));



export const Login = () => {
  <AppRouter>
    <CreateNewAccount />
    <Link to="/create-account"></Link>
    <RecoveryPassword />
    <Link to="/recovery-password"></Link>
  </AppRouter>;

  const classes = useStyles();
 
  const [formValues, handleInputChange] = useForm({
    name: "",
    password: "",
  });

  const { name, password } = formValues;

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( formValues  )
    // document.getElementById("Content").innerHTML =
    // "Value Name: " + name + "Value Password: " +password; 
    // console.log(formValues);
  };

  return (
    <Box justifyContent="flex-end" className={classes.root}>
      <Box
        className={classes.contentLogin}
        // className={classes.routeDecoration}
        alignItems="center"
        border={2}
        flexDirection="flex"
      >
        <form onSubmit={handleSubmit} component="form">
          <TextField
            onChange={handleInputChange}
            className={classes.inputsLogin}
            id="gmail"
            type="text"
            name="name"
            value={name}
            placeholder="Ingresa Tu Usuario"
            label="Usuario"
            variant="outlined"
            autoComplete="off"
            focused={true}
          ></TextField>

          <TextField
            onChange={handleInputChange}
            className={classes.inputsLogin}
            id="password"
            type="password"
            name="password"
            value={password}
            placeholder="Ingresa Tu Contraseña"
            label="Contraseña"
            variant="outlined"
            autoComplete="off"
            focused={true}
          ></TextField>
          <Button 
          type="submit"
          className={classes.btnLogin}
            
          >
           Inicia Sesión
           </Button>
        </form>
        <Box id="Content">

        </Box>
      <Box className={classes.routeDecoration}>
        <Box className={classes.routeDecoration}>
          <Button className={classes.btnRouteOne}>
            <Link className={classes.routeDecoration} to={"/create-account"}>
              Crear Nueva Cuenta
            </Link>
          </Button>

          <Button className={classes.btnRouteTwo}>
            <Link className={classes.routeDecoration} to={"/recovery-password"}>
              Recuperar Contraseña
            </Link>
          </Button>
        </Box>
      </Box>
      </Box>

    </Box>
  );
};

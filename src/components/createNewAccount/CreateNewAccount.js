import React, { useEffect } from "react";
import { Box, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
// import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useCreateNewAccount } from "../../hooks/useCreateNewAccount";
import { useVerifyPassword } from "../../hooks/useVerifyPassword";
// import { Button, TextField, makeStyles, Box } from "@material-ui/core";
// // import { createTheme } from "@material-ui/core";
// import { CreateNewAccount } from "../createNewAccount/CreateNewAccount";
// import { RecoveryPassword } from "../RecoveryPassword/RecoveryPassword";
// import { AppRouter } from "../../routes/AppRouter";


/**.main{
 * overflow-y: scroll
 * } */

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
    minWidth: 616, //420
    height: 507, //380
    backgroundColor: theme.palette.background.default,
    marginTop: 45,
    marginRight: 25,
    borderRadius: 15,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 320,
      height: 640,
      marginTop: -5,      
    },
  },
  inputsLogin: {
    display: "flex",
    flexDirection: "column",
    marginTop: 45,
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
    marginBottom: 25,
    marginTop: 45,
    width: 150,
    height: 50,
    marginLeft: 67,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[50],
    borderRadius: 10,
  },
  btnRouteOne: {
    marginTop: 5,
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

export const CreateNewAccount = () =>  {

  const classes = useStyles();

  const [ useChangeUser ,handleInputChangeUser] = useCreateNewAccount({
    name: "",
  });
  const [ useChangePassword, handleInputChangePassword ] = useVerifyPassword({
    password: "",
    verify: ""
  })

  let { name } = useChangeUser;
  let { password, verify } = useChangePassword;

  let save =  localStorage.getItem("User");
  name = localStorage.setItem("User", JSON.stringify(name));
  // let savePassword = localStorage.getItem("Password")
  // password = localStorage.setItem("User", JSON.stringify(password));
  
  
  useEffect(() =>{
    if(password === verify){
      document.getElementById("Content").innerHTML =
      "value:" + password + "valueTwo:" + verify;
     }
  }, [password, verify]);
  
  useEffect(() => {
  if( save === name ){
    console.log("MismoUsuario", JSON.parse(save));
  }
 
}, [name, save]);

//   useEffect(() => {
//     if( savePassword === password ){
//       console.log("MismoUsuarioPassword", JSON.parse(savePassword));
//     }
 
// }, [savePassword, password]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( useChangeUser ,useChangePassword );
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
              onChange={handleInputChangeUser}
              className={classes.inputsLogin}
              id="gmail"
              type="text"
              name="name"
              value={name}
              placeholder="Crea Un Nombre De Usuario"
              label="Crea Un Nombre Usuario"
              variant="outlined"
              autoComplete="off"
              focused={true}
            ></TextField>

            <TextField
              onChange={handleInputChangePassword}
              className={classes.inputsLogin}
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder="Crea Una Contraseña"
              label="Crea Una Contraseña"
              variant="outlined"
              autoComplete="off"
              focused={true}
            ></TextField>
  
            <TextField
              onChange={handleInputChangePassword}
              className={classes.inputsLogin}
              id="verify"
              type="verify"
              name="verify"
              value={verify}
              placeholder="Verifica Tu Contraseña"
              label="Verifica Tu Contraseña"
              variant="outlined"
              autoComplete="off"
              focused={true}
            ></TextField>
            
            <Button 
            type="submit"
            className={classes.btnLogin}
              
            >
             Crear Cuenta
             </Button>
          </form>

        <Box id="Content" style={{backgroundColor:"grey"}} >
        </Box>
        <Box className={classes.routeDecoration}>
          <Box className={classes.routeDecoration}>
            <Button className={classes.btnRouteOne}>
              <Link className={classes.routeDecoration} to={"/"}>
                Iniciar Sesión
              </Link>
            </Button>
          </Box>
        </Box>
        </Box>
  
      </Box>
  
    
    )};    






  
  
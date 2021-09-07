import React from 'react'
import {
        Button,
        TextField,
        makeStyles,
        Grid,
} from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';
import {CreateNewAccount} from'../createNewAccount/CreateNewAccount'
import { RecoveryPassword } from '../RecoveryPassword/RecoveryPassword';
import { AppRouter } from '../../routes/AppRouter';
import { Link } from 'react-router-dom';

export const themeDeferent = createTheme({
    breakpoints: {
        values:{
            tablet: 640,
            laptop: 1024,
            desktop: 1290,
        }
    }
});


const useStyles = makeStyles((theme) => ({
            
            root:{
                minWidth: "auto",
                maxWidth: 2204,
                backgroundColor: theme.palette.primary.dark,
                // [theme.breakpoints.down('md')]:{
                //     backgroundColor: 'red',
                // }
            },

            contentLogin:{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                maxWidth: 420,
                height: 380,
                backgroundColor: theme.palette.background.default,
                // [theme.breakpoints.down('xs','md',)]:{
                //     maxWidth: 320,
                //     maxHeight: 280,
                // },
                // borderRadius: 10,
            },
            inputsLogin:{
                // margin: 10,
                // padding: 10,
                
                maxWidth: 280,
                maxHeight: 200,
                color: theme.palette.primary.main,
                borderRadius: 10,
            },
            btnLogin:{
                margin: 10,
                width: 70,
                height:50,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.grey[50],
            },
            btnRoute:{
                text: theme.palette.secondary.dark,
            },
}));

// const useStyles = makeStyles((theme)  => ({
//     root:{
//         minHeight: "60%",
//         minWidth: 650,
//         background: theme.palette.background.default,
//     },
//     contentLogin:{
//         width: 600,
//         height: 400,
//         background: theme.palette.background.default,
//     },
//     inputsLogin:{
//         width: 200,
//         height: 200,
//         color: theme.palette.primary.main,
//         borderRadius: 10,
//     },
//     btnLogin:{
//         width: 70,
//         height:50,
//         color: theme.palette.primary.main,
//     },
//     btnRoute:{
//         boxDecorationBreak:Link()
//     },

// }));


export const Login = () => {

    <AppRouter>
    <CreateNewAccount/>
    <Link to="/create-account"></Link>
    <RecoveryPassword/>
    <Link to="/recovery-password"></Link>
    </AppRouter>
    // console.log({handleCreateNewAccount: createAccountNew}, {handleRecoveryPassword} + "Si Recibe El Callback")
    
    const classes = useStyles();

    const [formValues, handleInputChange] = useForm({
        name: '',
        password: ''
    });
    
    const {name, password} = formValues;

    // useEffect(() =>{
    // }, [name]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues)
    } 
    
    return (

    <Grid 
        container
            className={classes.root}
            >    
        <Grid 
            item
            onSubmit={ handleSubmit }
            className={classes.contentLogin} 
            borderColor={3}
            >       
        <TextField
            onChange={ handleInputChange  }
            className={classes.inputsLogin}
            id="gmail"
            type="text"
            name="name"
            value={ name }
            placeholder="Ingresa Tu Gmail"
            variant="outlined"
            color="secondary"
            autoComplete="off"
            >
        </TextField>
        
        <TextField
            onChange={ handleInputChange }
            className={classes.inputsLogin}
            id="password"
            type="password"
            name="password"
            value={ password }
            placeholder="Ingresa Tu Contraseña"
            variant="outlined"
            color="secondary"
            autoComplete="off"
            >
        </TextField>
        </Grid>

        <Grid 
            item
            className={classes.btnLogin}
            >
            <Button
            type="submit"
            >
            Ingresar
            </Button>      
        </Grid>
            
        <Grid 
            item
            className={classes.btnRoute}
            >  
            <Link 
            className={classes.btnLogin}
            to={"/create-account"}
            >
            Crear Nueva Cuenta
            </Link>
            
            <Link 
            className={classes.btnLogin}
            to={"/recovery-password"}
            >
            Recuperar Contraseña    
            </Link>
        </Grid>   
    </Grid>
    );
};

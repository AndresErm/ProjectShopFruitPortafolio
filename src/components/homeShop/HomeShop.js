import React from 'react'
import {Box, Divider} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import { Login } from '../login/Login';
import { CreateNewAccount } from "../createNewAccount/CreateNewAccount";
import { RecoveryPassword } from "../RecoveryPassword/RecoveryPassword";
import { AppRouter } from "../../routes/AppRouter";
import '../homeShop/background.css';
import { orange } from '@material-ui/core/colors';
import { dark } from '@material-ui/core/styles/createPalette';
// import { Login } from '../login/Login';

const useStyles = makeStyles({
    root:{
        width: "100%",
        height: 700,
        backgroundColor: dark,
        borderColor: 3,
    },
    boxLogin:{
        width:200,
        height:200,
        backgroundColor:orange,

    }
 
});

export const HomeShop = () => {
    const classes = useStyles();


    <AppRouter>
        <Login>
            <Link to="/login"></Link>
        </Login>
        <CreateNewAccount>
            <Link to="/"></Link>
        </CreateNewAccount>
        <RecoveryPassword>
            <Link to="/recovery-password"></Link>
        </RecoveryPassword>
      </AppRouter>
    return(
        <div>
    {/* </nav> */}
        <ul>
            <li>    
                <Link className={classes.boxLogin} to="/login">
                    Login
                </Link>
                </li>
            </ul>
            <ul>
                <li>    
                <Link to="/create-account">
                create account
                </Link>
                </li>
            </ul>
            <ul>
                <li>    
                <Link to="/recovery-password">
                recovery password
                </Link>
                </li>
            </ul>
            <Box className={classes.boxLogin}>
            </Box>
            <Box className={classes.boxLogin}>
                <Link to="/create-account">
                    Login
                </Link>
            </Box>
            <Box className={classes.boxLogin}>
                <Link to="/verify-account">
                    Login
                </Link>
            </Box> 
            <h1>
                Hola I´m A Home Fuki*** Bit***
            </h1>
    {/* </nav> */}
    </div>
    )
}
           


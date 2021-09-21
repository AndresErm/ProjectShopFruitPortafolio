import React from 'react'
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router';
// import { Login,} from '../login/Login';

export const RecoveryPassword = ({history}) => {

    if(!history){
        return <Redirect to="/login" />
    }
    
    const handleReturn = () =>{
        history.goBack();
    } 

    return (
        <div>
            <h1>CreateNewAccount</h1>
            <Button
            color="primary"
            size="medium"
            onClick={handleReturn}
            >
            Regresar?
            </Button>
        </div>
    )
}

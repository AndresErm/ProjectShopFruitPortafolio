import React from 'react'
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router';


export const CreateNewAccount = ({history}) =>  {

    
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
            color="secondary"
            size="medium"
            onClick={handleReturn}
            >
              Iniciar Secion Regresar  
            </Button>
        </div>
    )
}

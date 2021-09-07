import React from 'react'
import { Redirect ,Route, Switch } from 'react-router-dom';
import {CreateNewAccount} from '../components/createNewAccount/CreateNewAccount';
import { RecoveryPassword } from '../components/RecoveryPassword/RecoveryPassword';


// const NewAccountCreate = React.lazy(
//     () => import("../components/createNewAccount/CreateNewAccount"));


export const DashboardRoutes = () => {
    return (
        <> 
        <div>
            <Switch>
            <Route exact path="/create-account" component={CreateNewAccount}/>
            <Route exact path="/recovery-password" component={RecoveryPassword}/>
            <Redirect to="/login" />
            </Switch>
        </div>
        </>
    );
};

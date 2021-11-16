import React from 'react'
import { Redirect,Route, Switch } from 'react-router-dom';
import {CreateNewAccount} from '../components/createNewAccount/CreateNewAccount';
import { RecoveryPassword } from '../components/RecoveryPassword/RecoveryPassword';
import { Login } from '../components/login/Login';



// const NewAccountCreate = React.lazy(
//     () => import("../components/createNewAccount/CreateNewAccount"));


export const DashboardRoutes = () => {
    return (
        <> 
        <div>
            <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/create-account" component={CreateNewAccount}/>
            <Route exact path="/recovery-password" component={RecoveryPassword}/>
            <Redirect to="/Home-Shop" />
            </Switch>
        </div>
        </>
    );
};

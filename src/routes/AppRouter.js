import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {DashboardRoutes} from './DashboardRoutes';
import { Login } from '../components/login/Login';
import { ThemeProvider } from '@material-ui/styles';
import {newTheme} from '../theme/theme';
import { HomeShop } from '../components/homeShop/HomeShop';
// import { Login } from '../components/login/Login';


// const LoginHome = React.lazy(() => import("../components/login/Login"));

export const AppRouter = () => {
    return (
      
        <Router>
            <div>        
        <ThemeProvider theme={newTheme} >
            <Switch>
                <Route exact path="/Home-Shop" component={HomeShop}/>
                <Route path="/" component={DashboardRoutes}/>
            </Switch>
        </ThemeProvider>
            </div>
        </Router>
    );
};

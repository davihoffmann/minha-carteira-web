import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

export default function AppRoutes(): ReactElement {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/list/:type" exact component={List} />
            </Switch>
        </BrowserRouter>
    );
}

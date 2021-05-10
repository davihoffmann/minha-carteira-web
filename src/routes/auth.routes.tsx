import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from '../pages/Signin';

export default function AuthRoutes(): ReactElement {
    return (
        <Switch>
            <Route component={Signin} />
        </Switch>
    );
}

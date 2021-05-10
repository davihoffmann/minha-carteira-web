import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import AuthRoutes from './auth.routes';
// import AppRoutes from './app.routes';

export default function Routes(): ReactElement {
    return (
        <BrowserRouter>
            <AuthRoutes />
            {/* <Layout>

                <AppRoutes />
            </Layout> */}
        </BrowserRouter>
    );
}

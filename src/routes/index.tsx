import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import AppRoutes from './app.routes';

export default function Routes(): ReactElement {
    return (
        <BrowserRouter>
            <Layout>
                <AppRoutes />
            </Layout>
        </BrowserRouter>
    );
}

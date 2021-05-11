import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../hooks/auth';

export default function Routes(): ReactElement {
    const { logged } = useAuth();

    return (
        <BrowserRouter>
            {logged ? (
                <Layout>
                    <AppRoutes />
                </Layout>
            ) : (
                <AuthRoutes />
            )}
        </BrowserRouter>
    );
}

import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import AppRoutes from './app.routes';

export default function Routes(): ReactElement {
    return (
        <Layout>
            <AppRoutes />
        </Layout>
    );
}

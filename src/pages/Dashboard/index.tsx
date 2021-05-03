import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B"></ContentHeader>
        </Container>
    );
};

export default Dashboard;

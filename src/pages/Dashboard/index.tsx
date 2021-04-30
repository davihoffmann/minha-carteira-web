import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {
    const options = [
        {
            valor: 'Davi',
            label: 'Davi',
        },
        {
            valor: 'Davi1',
            label: 'Davi1',
        },
        {
            valor: 'Davi2',
            label: 'Davi2',
        },
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
};

export default Dashboard;

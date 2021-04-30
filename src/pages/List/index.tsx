import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const List: React.FC = () => {
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
            <ContentHeader title="List" lineColor="#F7b41B">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
};

export default List;

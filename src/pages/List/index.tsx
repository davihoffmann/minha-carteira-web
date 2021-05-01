import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { Container, Content } from './styles';

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

            <Content>
                <HistoryFinanceCard
                    cardColor="#F7b41B"
                    tagColor="#F7b41B"
                    title="Teste 1"
                    subtitle="Teste 1"
                    amount="R$ 150,00"
                />
            </Content>
        </Container>
    );
};

export default List;

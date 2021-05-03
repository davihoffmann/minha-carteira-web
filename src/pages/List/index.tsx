import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { Container, Filters, Content } from './styles';

const List: React.FC = () => {
    const months = [
        {
            valor: 1,
            label: 'Janeiro',
        },
        {
            valor: 2,
            label: 'Fevereiro',
        },
        {
            valor: 3,
            label: 'Março',
        },
        {
            valor: 4,
            label: 'Abril',
        },
        {
            valor: 5,
            label: 'Maio',
        },
        {
            valor: 6,
            label: 'Junho',
        },
        {
            valor: 7,
            label: 'Julho',
        },
        {
            valor: 8,
            label: 'Agosto',
        },
        {
            valor: 9,
            label: 'Setembro',
        },
        {
            valor: 10,
            label: 'Outubro',
        },
        {
            valor: 11,
            label: 'Novembro',
        },

        {
            valor: 12,
            label: 'Dezembro',
        },
    ];

    const years = [
        {
            valor: 2018,
            label: 2018,
        },
        {
            valor: 2019,
            label: 2019,
        },
        {
            valor: 2020,
            label: 2020,
        },
        {
            valor: 2021,
            label: 2021,
        },
        {
            valor: 2022,
            label: 2022,
        },
    ];

    return (
        <Container>
            <ContentHeader title="List" lineColor="#F7b41B">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>
                <button type="button" className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard tagColor="#e44c4e" title="Teste 1" subtitle="27/01/2021" amount="R$ 150,00" />
            </Content>
        </Container>
    );
};

export default List;

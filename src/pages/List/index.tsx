import React, { ReactElement, useMemo, useState, useEffect } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { Container, Filters, Content } from './styles';
import { IRouteParams, IData } from './types';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

export default function List({ match }: IRouteParams): ReactElement {
    const [data, setData] = useState<IData[]>();
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));
    const { type } = match.params;

    const headerInfo = useMemo(() => {
        return type === 'entry-balance'
            ? { title: 'Entradas', lineColor: '#f79310' }
            : { title: 'Saídas', lineColor: '#e44c4e' };
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, []);

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

    useEffect(() => {
        const FilteredData = listData.filter(i => {
            const date = new Date(i.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;
        });

        const formattedData = FilteredData.map(i => {
            return {
                id: String(new Date().getTime() / 1000) + i.amount,
                description: i.description,
                amountFormatted: formatCurrency(Number(i.amount)),
                frequency: i.frequency,
                dataFomatted: formatDate(i.date),
                tagColor: i.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e',
            };
        });

        setData(formattedData);
    }, [listData, monthSelected, yearSelected]);

    return (
        <Container>
            <ContentHeader title={headerInfo.title} lineColor={headerInfo.lineColor}>
                <SelectInput
                    options={months}
                    onChange={e => setMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={years}
                    onChange={e => setYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
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
                {data?.map(item => (
                    <HistoryFinanceCard
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dataFomatted}
                        amount={item.amountFormatted}
                    />
                ))}
            </Content>
        </Container>
    );
}

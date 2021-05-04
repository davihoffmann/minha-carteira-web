import React, { ReactElement, useMemo, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { Container, Filters, Content } from './styles';
import { IRouteParams, IData } from './types';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

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

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                valor: index + 1,
                label: month,
            };
        });
    }, []);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map(year => {
            return {
                valor: year,
                label: year,
            };
        });
    }, [listData]);

    useEffect(() => {
        const FilteredData = listData.filter(i => {
            const date = new Date(i.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;
        });

        const formattedData = FilteredData.map(item => {
            return {
                id: uuid(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFomatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e',
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

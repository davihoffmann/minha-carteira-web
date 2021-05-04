import React, { ReactElement, useMemo, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';

import { Container, Filters, Content } from './styles';
import { IRouteParams, IData } from './types';

export default function List({ match }: IRouteParams): ReactElement {
    const [data, setData] = useState<IData[]>();
    const [selectedFrequency, setSelectFrequency] = useState<string[]>(['recorrente', 'eventual']);
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const { type } = match.params;

    const pageData = useMemo(() => {
        if (type === 'entry-balance') {
            return { title: 'Entradas', lineColor: '#4e41f0', data: gains };
        } else {
            return { title: 'Saídas', lineColor: '#e44c4e', data: expenses };
        }
    }, [type]);

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

        const { data } = pageData;

        data.forEach(item => {
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
    }, [pageData]);

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);

        if (alreadySelected >= 0) {
            const filtered = selectedFrequency.filter(item => item !== frequency);
            setSelectFrequency(filtered);
        } else {
            setSelectFrequency(prev => [...prev, frequency]);
        }
    };

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch (error) {
            throw new Error('Invalid month value. Is accept 1 - 12.' + error);
        }
    };

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch (error) {
            throw new Error('Invalid year value. Is accept integer number.' + error);
        }
    };

    useEffect(() => {
        const { data } = pageData;
        const FilteredData = data.filter(i => {
            const date = new Date(i.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(i.frequency);
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
    }, [pageData, monthSelected, yearSelected, selectedFrequency]);

    return (
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
                <SelectInput
                    options={months}
                    onChange={e => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={years}
                    onChange={e => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent ${
                        selectedFrequency.includes('recorrente') && 'tag-actived'
                    }`}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>
                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual ${
                        selectedFrequency.includes('eventual') && 'tag-actived'
                    }`}
                    onClick={() => handleFrequencyClick('eventual')}
                >
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

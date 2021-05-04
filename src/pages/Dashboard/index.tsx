import React, { useState, useMemo } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import listOfMonths from '../../utils/months';

import happyIcon from '../../assets/happy.svg';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

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

        [...gains, ...expenses].forEach(item => {
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
    }, []);

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

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
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

            <Content>
                <WalletBox
                    title="Saldo"
                    amount={150}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="dolar"
                    color="#4e41f0"
                />

                <WalletBox
                    title="Entradas"
                    amount={5000}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#f7931b"
                />

                <WalletBox
                    title="Saída"
                    amount={4850}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#e44c4e"
                />

                <MessageBox
                    title="Muito bem!"
                    description="Sua carteira esta positiva!"
                    footerText="Continue assim. Considere investir seu saldo."
                    icon={happyIcon}
                />
            </Content>
        </Container>
    );
};

export default Dashboard;

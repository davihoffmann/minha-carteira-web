import React, { useState, useMemo } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryChartBox from '../../components/HistoryChartBox';
import BarChartBox from '../../components/BarChartBox';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listOfMonths from '../../utils/months';

import happyIcon from '../../assets/happy.svg';
import sadIcon from '../../assets/sad.svg';
import GrenningIcon from '../../assets/grinning.svg';

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

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('Invalid amount! Amount must be number.');
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('Invalid amount! Amount must be number.');
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalGains, totalExpenses]);

    const message = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title: 'Que Pena!',
                description: 'Neste mês, você gastou mais do que devia!',
                footerText: 'Verifique seus gastos e tente cortar algumas despesas desnecessárias.',
                icon: sadIcon,
            };
        } else if (totalGains === 0 && totalExpenses === 0) {
            return {
                title: 'Opss!',
                description: 'Neste mêsnão há registro de entrada ou saída!',
                footerText: 'Parece que você não fe nenhum registro no mês e no ano selecionado.',
                icon: sadIcon,
            };
        } else if (totalBalance === 0) {
            return {
                title: 'Ufaaa!',
                description: 'Neste mês, você gastou exatamente o que ganhou.!',
                footerText: 'Tenha cuidado. No próximo teste poupar o seu dinheiro',
                icon: GrenningIcon,
            };
        } else {
            return {
                title: 'Muito bem!',
                description: 'Sua carteira esta positiva!',
                footerText: 'Continue assim. Considere investir seu saldo.',
                icon: happyIcon,
            };
        }
    }, [totalBalance, totalGains, totalExpenses]);

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const percentGains = totalGains !== 0 ? (totalGains / total) * 100 : 0;
        const percentExpenses = totalExpenses !== 0 ? (totalExpenses / total) * 100 : 0;

        const data = [
            {
                name: 'Entrada',
                valeu: totalGains,
                percent: Number(percentGains.toFixed(1)),
                color: '#e44c4e',
            },
            {
                name: 'Sáidas',
                valeu: totalExpenses,
                percent: Number(percentExpenses.toFixed(1)),
                color: '#f7931b',
            },
        ];
        return data;
    }, [totalGains, totalExpenses]);

    const historyChartData = useMemo(() => {
        return listOfMonths
            .map((_, month) => {
                let amountEntry = 0;
                gains.forEach(gain => {
                    const date = new Date(gain.date);
                    const gainMonth = date.getMonth();
                    const gainYear = date.getFullYear();

                    if (gainMonth === month && gainYear === yearSelected) {
                        try {
                            amountEntry += Number(gain.amount);
                        } catch {
                            throw new Error('Amount Entry is Invalid. Amount Entry must be valid number!');
                        }
                    }
                });

                let amountOutput = 0;
                expenses.forEach(expense => {
                    const date = new Date(expense.date);
                    const expenseMonth = date.getMonth();
                    const expenseYear = date.getFullYear();

                    if (expenseMonth === month && expenseYear === yearSelected) {
                        try {
                            amountOutput += Number(expense.amount);
                        } catch {
                            throw new Error('Amount Output is Invalid. Amount Output must be valid number!');
                        }
                    }
                });

                return {
                    monthNumber: month,
                    month: listOfMonths[month].substr(0, 3),
                    amountEntry,
                    amountOutput,
                };
            })
            .filter(item => {
                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();

                return (yearSelected === currentYear && item.monthNumber <= currentMonth) || yearSelected < currentYear;
            });
    }, [yearSelected]);

    const relationExpensevesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses
            .filter(expense => {
                const date = new Date(expense.date);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;

                return month === monthSelected && year === yearSelected;
            })
            .forEach(expense => {
                if (expense.frequency === 'recorrente') {
                    return (amountRecurrent += Number(expense.amount));
                }

                if (expense.frequency === 'eventual') {
                    return (amountEventual += Number(expense.amount));
                }
            });

        const total = amountRecurrent + amountEventual;
        const percentualRecurrent = (amountRecurrent / total) * 100;
        const percentualEventual = (amountEventual / total) * 100;

        return [
            {
                name: 'Recorrente',
                amount: amountRecurrent,
                percent: percentualRecurrent ? Number(percentualRecurrent.toFixed(1)) : 0,
                color: '#f7931b',
            },
            {
                name: 'Eventual',
                amount: amountEventual,
                percent: percentualEventual ? Number(percentualEventual.toFixed(1)) : 0,
                color: '#e44c4e',
            },
        ];
    }, [monthSelected, yearSelected]);

    const relationGainsRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains
            .filter(gain => {
                const date = new Date(gain.date);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;

                return month === monthSelected && year === yearSelected;
            })
            .forEach(gain => {
                if (gain.frequency === 'recorrente') {
                    return (amountRecurrent += Number(gain.amount));
                }

                if (gain.frequency === 'eventual') {
                    return (amountEventual += Number(gain.amount));
                }
            });

        const total = amountRecurrent + amountEventual;
        const percentualRecurrent = (amountRecurrent / total) * 100;
        const percentualEventual = (amountEventual / total) * 100;

        return [
            {
                name: 'Recorrente',
                amount: amountRecurrent,
                percent: percentualRecurrent ? Number(percentualRecurrent.toFixed(1)) : 0,
                color: '#f7931b',
            },
            {
                name: 'Eventual',
                amount: amountEventual,
                percent: percentualEventual ? Number(percentualEventual.toFixed(1)) : 0,
                color: '#e44c4e',
            },
        ];
    }, [monthSelected, yearSelected]);

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
                    amount={totalBalance}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="dolar"
                    color="#4e41f0"
                />

                <WalletBox
                    title="Entradas"
                    amount={totalGains}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#f7931b"
                />

                <WalletBox
                    title="Saída"
                    amount={totalExpenses}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#e44c4e"
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChartBox data={relationExpensesVersusGains} />

                <HistoryChartBox
                    data={historyChartData}
                    lineColorAmountEntry="#f7931b"
                    lineColorAmountOutput="#e44c4e"
                />

                <BarChartBox title="Saídas" data={relationExpensevesRecurrentVersusEventual} />

                <BarChartBox title="Entrada" data={relationGainsRecurrentVersusEventual} />
            </Content>
        </Container>
    );
};

export default Dashboard;

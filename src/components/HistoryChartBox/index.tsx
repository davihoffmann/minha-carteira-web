import React, { ReactElement } from 'react';

import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';

import { Container, ChartHeader, LegendContainer, Legend, ChartContainer } from './styles';
import { IHistoryChartBoxProps } from './types';

export default function HistoryChartBox({
    data,
    lineColorAmountEntry,
    lineColorAmountOutput,
}: IHistoryChartBoxProps): ReactElement {
    return (
        <Container>
            <ChartHeader>
                <h2>Histórico de Saldo</h2>

                <LegendContainer>
                    <Legend color={lineColorAmountEntry}>
                        <div></div>
                        <span>Entradas</span>
                    </Legend>
                    <Legend color={lineColorAmountOutput}>
                        <div></div>
                        <span>Saídas</span>
                    </Legend>
                </LegendContainer>
            </ChartHeader>

            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                        <XAxis dataKey="month" stroke="#cecece" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="amountEntry"
                            name="Entradas"
                            stroke={lineColorAmountEntry}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="amountOutput"
                            name="Saídas"
                            stroke={lineColorAmountOutput}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    );
}

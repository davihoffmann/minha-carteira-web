import React, { ReactElement } from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import formatCurrency from '../../utils/formatCurrency';
import { IBarChartBoxProps } from './types';
import { Container, SideLeft, SideRight, LegendContainer, Legend } from './styles';

export default function BarChartBox({ title, data }: IBarChartBoxProps): ReactElement {
    return (
        <Container>
            <SideLeft>
                <h2>{title}</h2>
                <LegendContainer>
                    {data.map(item => (
                        <Legend key={item.name} color={item.color}>
                            <div>{item.percent}%</div>
                            <span>{item.name}</span>
                        </Legend>
                    ))}
                </LegendContainer>
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="amount">
                            {data.map(item => (
                                <Cell key={item.name} cursor="pointer" fill={item.color} />
                            ))}
                        </Bar>
                        <Tooltip formatter={(value: any) => formatCurrency(Number(value))} />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    );
}

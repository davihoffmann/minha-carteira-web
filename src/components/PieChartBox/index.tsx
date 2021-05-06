import React, { ReactElement } from 'react';

import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

import { IPieChartProps } from './types';

import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

export default function PieChartBox({ data }: IPieChartProps): ReactElement {
    return (
        <Container>
            <SideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                    {data.map(item => (
                        <Legend key={item.name} color={item.color}>
                            <div>{item.percent}%</div>
                            <span>{item.name}%</span>
                        </Legend>
                    ))}
                </LegendContainer>
            </SideLeft>
            <SideRight>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} dataKey="percent" label>
                            {data.map(indicator => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    );
}

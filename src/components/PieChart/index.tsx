import React, { ReactElement } from 'react';
// import { PieChart, Pie, ResponsiveContainer } from 'recharts';

import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

export default function PieChart(): ReactElement {
    return (
        <Container>
            <SideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                    <Legend>
                        <div>95%</div>
                        <span>Saídas</span>
                    </Legend>
                    <Legend>
                        <div>5%</div>
                        <span>Entradas</span>
                    </Legend>
                </LegendContainer>
            </SideLeft>
            <SideRight>
                {/* <ResponsiveContainer>
                    <PieChart>
                        <Pie data={[{ amount: 30, percent: 95 }]} labelLine={false} dataKey="percent">
                            {}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer> */}
            </SideRight>
        </Container>
    );
}

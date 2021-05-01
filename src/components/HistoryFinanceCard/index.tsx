import React, { ReactElement } from 'react';
import { IHistoryFinanceCardProps } from './types';
import { Container, Tag } from './styles';

export default function HistoryFinanceCard({
    cardColor,
    tagColor,
    title,
    subtitle,
    amount,
}: IHistoryFinanceCardProps): ReactElement {
    return (
        <Container cardColor={cardColor}>
            <Tag tagColor={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );
}

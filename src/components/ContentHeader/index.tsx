import React, { ReactElement, PropsWithChildren } from 'react';
import { IContentHeaderProps } from './types';
import { Container, TitleContainer, Controllers } from './styles';

export default function ContentHeader({
    children,
    title,
    lineColor,
}: PropsWithChildren<IContentHeaderProps>): ReactElement {
    return (
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>{children}</Controllers>
        </Container>
    );
}

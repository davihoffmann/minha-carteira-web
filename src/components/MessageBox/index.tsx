import React, { ReactElement } from 'react';

import { Container } from './styles';
import { IMessageBoxProps } from './types';

export default function MessageBox({ title, description, footerText, icon }: IMessageBoxProps): ReactElement {
    return (
        <Container>
            <header>
                <h1>
                    {title} <img src={icon} alt={title} />
                </h1>
                <p>{description}</p>
            </header>
            <footer>{footerText}</footer>
        </Container>
    );
}

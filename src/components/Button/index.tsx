import React, { ReactElement, PropsWithChildren } from 'react';
import { IButtonProps } from './types';
import { Container } from './styles';

export default function Button({ children, ...rest }: PropsWithChildren<IButtonProps>): ReactElement {
    return <Container {...rest}>{children}</Container>;
}

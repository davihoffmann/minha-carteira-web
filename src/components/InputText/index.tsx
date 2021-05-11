import React, { ReactElement } from 'react';
import { IInputTextProps } from './types';
import { Container } from './styles';

export default function InputText({ ...rest }: IInputTextProps): ReactElement {
    return <Container {...rest} />;
}

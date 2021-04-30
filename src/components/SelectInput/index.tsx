import React, { ReactElement } from 'react';
import { ISelectInputProps } from './types';
import { Container } from './styles';

export default function SelectInput({ options }: ISelectInputProps): ReactElement {
    return (
        <Container>
            <select>
                {options.map(option => (
                    <option key={option.valor} value={option.valor}>
                        {option.label}
                    </option>
                ))}
            </select>
        </Container>
    );
}

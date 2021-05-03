import React, { ReactElement } from 'react';
import { ISelectInputProps } from './types';
import { Container } from './styles';

export default function SelectInput({ options, onChange, defaultValue }: ISelectInputProps): ReactElement {
    return (
        <Container>
            <select onChange={onChange} defaultValue={defaultValue}>
                {options.map(option => (
                    <option key={option.valor} value={option.valor}>
                        {option.label}
                    </option>
                ))}
            </select>
        </Container>
    );
}

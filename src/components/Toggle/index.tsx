import React from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';
import { IToggleProps } from './types';

const Toggle: React.FC<IToggleProps> = ({ labelLeft, labelRight, checked, onChange }: IToggleProps) => (
    <Container>
        <ToggleLabel>{labelLeft}</ToggleLabel>
        <ToggleSelector onChange={onChange} checked={checked} uncheckedIcon={false} checkedIcon={false} />
        <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
);

export default Toggle;

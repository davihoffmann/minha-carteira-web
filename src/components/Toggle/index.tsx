import React from 'react';

import { Container, ToggleLabel, ToggleSelector } from './styles';

const handleOnChange = () => {
    alert('mudou');
};

const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector onChange={handleOnChange} checked uncheckedIcon={false} checkedIcon={false} />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
);

export default Toggle;

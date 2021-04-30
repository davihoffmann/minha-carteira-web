import React from 'react';

import { Container } from './styles';

export default function Content({ children }: React.PropsWithChildren<any>): React.ReactElement {
    return <Container>{children}</Container>;
}

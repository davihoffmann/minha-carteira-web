import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

import dark from './styles/Themes/dark';

const App: FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
};
export default App;

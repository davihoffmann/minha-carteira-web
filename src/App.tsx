import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { useTheme } from './hooks/theme';
import Routes from './routes';

const App: FC = () => {
    const { theme } = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
};
export default App;

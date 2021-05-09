import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/Themes/dark';
import light from '../styles/Themes/light';

interface IThemeContext {
    toggleTheme: () => void;
    theme: Itheme;
}

interface Itheme {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        white: string;
        black: string;
        grey: string;
        success: string;
        info: string;
        warning: string;
    };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }: React.PropsWithChildren<any>) => {
    const [theme, setTheme] = useState<Itheme>(dark);

    const toggleTheme = () => {
        if (theme.title === 'dark') {
            setTheme(dark);
        } else {
            setTheme(light);
        }
    };

    return <ThemeContext.Provider value={{ toggleTheme, theme }}>{children}</ThemeContext.Provider>;
};

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    return context;
}

export { ThemeProvider, useTheme };

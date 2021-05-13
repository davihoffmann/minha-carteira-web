import React, { useMemo, useState } from 'react';
import Toggle from '../../components/Toggle';
import emojis from '../../utils/emojis';
import { useTheme } from '../../hooks/theme';
import { Container, Profile, Welcome, Username } from './styles';

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => (theme.title === 'dark' ? true : false));

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);

        return emojis[indice];
    }, []);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    };

    return (
        <Container>
            <Toggle labelLeft="Light" labelRight="Dark" checked={darkTheme} onChange={handleChangeTheme} />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <Username>Davi Hoffmann</Username>
            </Profile>
        </Container>
    );
};

export default MainHeader;

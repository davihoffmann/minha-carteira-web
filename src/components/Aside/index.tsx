import React, { useState } from 'react';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu } from 'react-icons/md';
import { Container, Header, Logo, Title, MenuContainer, MenuItem, MenuItemButton, ToogleMenu } from './styles';
import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
    const [menuIsOpen, setMenuOpen] = useState(false);
    const { signOut } = useAuth();

    const handleToggleMenu = () => {
        setMenuOpen(curr => !curr);
    };

    return (
        <Container isOpen={menuIsOpen}>
            <Header>
                <ToogleMenu onClick={handleToggleMenu}>{menuIsOpen ? <MdClose /> : <MdMenu />}</ToogleMenu>
                <Logo src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItem to="/">
                    <MdDashboard />
                    Dashboard
                </MenuItem>
                <MenuItem to="/list/entry-balance">
                    <MdArrowDownward /> Entradas
                </MenuItem>
                <MenuItem to="/list/exit-balance">
                    <MdArrowUpward /> Saídas
                </MenuItem>
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    );
};

export default Aside;

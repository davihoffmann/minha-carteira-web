import React from 'react';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import { Container, Header, Logo, Title, MenuContainer, MenuItem, MenuItemButton } from './styles';
import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/logo.svg';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    return (
        <Container>
            <Header>
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

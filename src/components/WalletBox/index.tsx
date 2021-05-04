import React, { ReactElement } from 'react';
import CountUp from 'react-countup';

import dolarImg from '../../assets/dollar.svg';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';

import { Container } from './styles';
import { IWalletBoxProps } from './types';

export default function WalletBox({ title, amount, footerLabel, icon, color }: IWalletBoxProps): ReactElement {
    const iconSelected = () => {
        switch (icon) {
            case 'dolar':
                return dolarImg;
            case 'arrowUp':
                return arrowUp;
            case 'arrowDown':
                return arrowDown;
            default:
                return undefined;
        }
    };

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp end={amount} prefix={'R$ '} separator="." decimal="," decimals={2} />
            </h1>
            <small>{footerLabel}</small>
            {iconSelected && <img src={iconSelected()} alt={title} />}
        </Container>
    );
}

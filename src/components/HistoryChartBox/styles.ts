import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 100%;
    height: 320px;
    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;
    border-radius: 7px;
`;

export const ChartContainer = styled.div`
    flex: 1;
    height: 300px;
`;

export const ChartHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 15px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
    display: flex;
    padding-right: 15px;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    margin-right: 7px;

    > div {
        background-color: ${props => props.color};

        width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 14px;
        text-align: center;
        line-height: 40px;
    }

    > span {
        margin-left: 5px;
    }
`;

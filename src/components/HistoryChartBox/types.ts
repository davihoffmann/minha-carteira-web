export interface IHistoryChartBoxProps {
    data: {
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[];
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

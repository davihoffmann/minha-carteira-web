export interface IRouteParams {
    match: {
        params: {
            type: string;
        };
    };
}

export interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFomatted: string;
    tagColor: string;
}

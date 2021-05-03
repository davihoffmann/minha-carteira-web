import React from 'react';

export interface ISelectInputProps {
    options: {
        valor: string | number;
        label: string | number;
    }[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    defaultValue?: string | number;
}

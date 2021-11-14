/// <reference types="react-scripts" />

declare type Nullable<T> = T | null | undefined;

declare type ObjectLiteralType = {
    [key: string]: any;
};

declare type SelectOptionType = {
    value: string;
    label: string | number;
};

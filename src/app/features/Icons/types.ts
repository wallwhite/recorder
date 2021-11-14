export type SVGIconProps = {
    titleAccess?: Nullable<string>;
    className?: Nullable<string>;
    color?: Nullable<string>;
    fill?: string;
    stroke?: string;
    viewBox: string;
    width: string;
    height: string;
};

export type SvgElementProps = SVGIconProps & {
    children: any;
    [key: string]: unknown;
};

import React from 'react';
import classNames from 'classnames';
import type { SvgElementProps } from 'app/features/Icons/types';

const SvgIcon: React.FC<SvgElementProps> = ({
    children,
    className,
    color,
    width,
    height,
    viewBox,
    titleAccess,
    ...other
}) => (
    <svg
        className={classNames(className)}
        width={width}
        height={height}
        viewBox={viewBox}
        focusable="false"
        color={color || ''}
        aria-hidden={titleAccess ? undefined : 'true'}
        role={titleAccess ? 'img' : 'presentation'}
        {...other}
    >
        {children}
        {titleAccess ? <title>{titleAccess}</title> : null}
    </svg>
);

SvgIcon.defaultProps = {
    children: null,
    className: '',
    color: 'inherit',
    titleAccess: '',
};

export default SvgIcon;

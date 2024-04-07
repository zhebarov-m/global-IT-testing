import {CSSProperties, FC, ReactNode} from "react";

import cn from "classnames";

interface CardProps {
    title: string;
    width?: string,
    height?: string,
    align?: boolean | undefined,
    onClick: () => void
    className?: string | undefined,
    style?: CSSProperties
    children?: ReactNode,
}

export const Card: FC<CardProps> = (props) => {
    const {
        title,
        width = '100%',
        height = '100%',
        onClick,
        className,
        style,
        children,
    } = props;

    return (
        <div
            style={{ width, height, backgroundColor: 'white', ...style }}
            className={cn(className)}
            onClick={onClick}
        >
            <h2 className="text-2xl font-bold text-[#262C40] mb-8">{title}</h2>
            {children}
        </div>
    );
};

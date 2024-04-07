import {NavLink, NavLinkProps} from "react-router-dom";
import {ReactNode} from "react";
import styles from './AppLink.module.scss'

interface AppLinkProps extends NavLinkProps {
    className?: string
    children?: ReactNode
}

const AppLink = (props: AppLinkProps) => {
    const {
        to,
        children,
        className
    } = props

    return (
        <NavLink
            className={`${className} ${styles.link}`}
            to={to}
        >
            {children}
        </NavLink>
    );
};

export default AppLink;

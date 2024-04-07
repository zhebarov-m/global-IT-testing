import {RouteProps} from "react-router-dom";
import {ReportPage} from "../../../pages/ReportPage";
import {AboutPage} from "../../../pages/AboutPage";


export enum AppRoutes {
    REPORT = 'report',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.REPORT]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.REPORT]: {
        path: RoutePath[AppRoutes.REPORT],
        element: <ReportPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage/>
    },
}

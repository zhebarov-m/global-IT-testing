import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout/MainLayout.tsx";
import {routeConfig} from "../../routerConfig/";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    {Object.values(routeConfig).map(({path, element}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Route>
            </Routes>
        </Suspense>
    );
};


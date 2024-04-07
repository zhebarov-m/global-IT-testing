import {Outlet} from "react-router-dom";
import {Header} from "../../components/Header";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <main className="flex flex-col items-center">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;

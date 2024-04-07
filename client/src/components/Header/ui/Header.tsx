import {Navbar} from "../../Navbar";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="flex justify-between items-center shadow py-4 px-16 bg-white">
            <Link to={'/'} className="text-3xl font-bold">
                Глобэкс <span className="bg-red-700 px-1 rounded text-white">АйТи</span>
            </Link>
            <Navbar />
        </header>
    );
};


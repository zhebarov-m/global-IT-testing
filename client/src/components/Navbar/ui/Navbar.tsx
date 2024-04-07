import {NAV_LINKS} from "../model/data/navLinks.ts";
import AppLink from "../../../shared/AppLink/AppLink.tsx";


export const Navbar = () => {
    return (
        <div className="flex justify-end gap-4 text-xl">
            {NAV_LINKS.map((link) => (
                <AppLink key={link.id} to={link.path}>{link.title}</AppLink>
            ))}
        </div>
    );
};


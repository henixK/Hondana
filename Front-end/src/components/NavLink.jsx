import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

export default function NavLink({ children, to }) {
    return (
        <NavigationMenuItem >
            <Link to={to} className="text-white hover:text-black hover:bg-white-japan cursor-pointer text-base list-none my-2 w-[100px] font-bold px-4 py-2 rounded-xl">
                {children}
            </Link>
        </NavigationMenuItem>
    )
}
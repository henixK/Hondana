import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

export default function NavLink({ children, to }) {
    return (
        <NavigationMenuItem >
            <Link to={to} className="text-white hover:underline cursor-pointer text-base list-none my-2 w-[100px] font-bold">
                {children}
            </Link>
        </NavigationMenuItem>
    )
}
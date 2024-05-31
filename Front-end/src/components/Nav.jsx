import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import hondana from "../assets/HONDANA.svg";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

export default function Nav() {
    return (
        <NavigationMenu className="w-full px-2 lg:px-10 py-5 bg-red-japan flex justify-between items-center">
            <Sheet>
                <SheetTrigger>
                    <Menu color="white" className="w-10 h-10" />
                </SheetTrigger>
                <SheetContent className="w-[150px] lg:w-[450px] bg-red-japan flex flex-col border-none py-36 px-4 lg:px-12">
                    <NavigationMenuList className=" space-y-10">
                        <NavLink to="/Novità">Novità</NavLink>
                        <NavLink to="/Catalogo">Catalogo</NavLink>
                        <NavLink to="/About">Chi siamo</NavLink>
                        <NavLink to="/Account">Account</NavLink>
                    </NavigationMenuList>
                </SheetContent>
            </Sheet>
            <Link to="/">
                <img src={hondana} className="w-[150px] lg:w-[200px] cursor-pointer" alt="Hondana Logo" />
            </Link>
            <Link to="/Carello">
                <ShoppingCart color="white" size={35} />
            </Link>
        </NavigationMenu>
    );
}

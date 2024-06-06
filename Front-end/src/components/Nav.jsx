import { Link } from "react-router-dom";
import hondana from "../assets/HONDANA.svg";
import {
    NavigationMenu,
    NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Button } from "./ui/button";
import MenuLeft from "./Menu";
import { ShoppingBag } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Logo from "./Logo";
import CartMenu from "./CartMenu";

export default function Nav() {
    return (
        <NavigationMenu className="w-full px-2 lg:px-10 py-5 bg-red-japan flex justify-between items-center">
            <MenuLeft />
            <Logo />
            <CartMenu />

        </NavigationMenu>
    );
}

import {
    NavigationMenu,
    NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import MenuLeft from "./Menu";
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

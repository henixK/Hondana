import NavLink from "./NavLink";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Menu } from "lucide-react";




export default function MenuLeft() {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu color="white" className="w-10 h-10" />
            </SheetTrigger>
            <SheetContent side={"left"} className="w-[150px] lg:w-[450px] bg-red-japan flex flex-col border-none py-36 px-4 lg:px-12">
                <NavigationMenuList className=" space-y-10">
                    <NavLink to="/Novità">Novità</NavLink>
                    <NavLink to="/Catalogo">Catalogo</NavLink>
                    <NavLink to="/About">Chi siamo</NavLink>
                    <NavLink to="/Accedi">Accedi</NavLink>
                </NavigationMenuList>
            </SheetContent>
        </Sheet>
    )
}
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import { NavigationMenuList } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export default function () {
    return (
        <Sheet>
            <SheetTrigger>
                <ShoppingBag color="white" size={35} />
            </SheetTrigger>
            <SheetContent side={"right"} className="w-[150px] lg:w-[450px] bg-red-japan flex flex-col border-none py-36 px-4 lg:px-12">
                <NavigationMenuList className=" space-y-10">
                    <SheetClose className="left-0"/>
                        <Link to="/Carello">
                            <Button>Vai al checkout</Button>
                        </Link>
                </NavigationMenuList>
            </SheetContent>
        </Sheet>
    )
}
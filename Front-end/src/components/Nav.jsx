import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import hondana from "../assets/HONDANA.svg";
import cart from "../assets/Cart.svg";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Menu } from "lucide-react";


export default function Nav() {

    return (
        <nav className="w-full px-2 lg:px-10 py-5 bg-red-japan flex justify-between items-center">
            <Sheet className="w-[30px]">
                <SheetTrigger >
                    <Menu color="white" className="w-10 h-10" />
                </SheetTrigger>
                <SheetContent className="bg-red-japan flex flex-col border-none py-36">
                    <NavLink to="/Novità" >Novità</NavLink>
                    <NavLink to="/Catalogo">Catalogo</NavLink>
                    <NavLink to="/About">Chi siamo</NavLink>
                    <NavLink to="/Account">Account</NavLink>
                </SheetContent>
            </Sheet>
            <Link to="/"><img src={hondana} className="w-[150px] lg:w-[200px] cursor-pointer" alt="Hondana Logo" /></Link>
            <div className="cursor-pointer">
                <Link to="Carello"><img src={cart} className="lg:w-[40px] h-auto" alt="Cart" /></Link>
            </div>
        </nav>
    );
}

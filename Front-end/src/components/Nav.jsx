import { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import hondana from "../assets/HONDANA.svg";
import { Squash as Hamburger } from 'hamburger-react';
import cart from "../assets/Cart.svg";

export default function Nav() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="w-full px-2 lg:px-10 py-5 bg-red-japan flex justify-between items-center">
            <Hamburger color="white" className="z-20" toggled={isOpen} toggle={setOpen} />
            <Link to="/"><img src={hondana} className="w-[150px] lg:w-[200px] cursor-pointer" alt="Hondana Logo" /></Link>
            <div className="cursor-pointer">
                <Link to="Carello"><img src={cart} className="lg:w-[40px] h-auto" alt="Cart" /></Link>
            </div>
            <div
                className={`absolute top-20 lg:top-0 left-0 w-1/2 lg:w-1/5 h-60 lg:h-full bg-red-japan shadow-lg z-10 flex flex-col px-5 lg:px-12 gap-5 py-10 lg:py-36 transition-transform duration-300 ease-in-out ${isOpen ? ' lg:translate-x-0' : 'transform -translate-x-full'
                    }`}
            >
                <NavLink to="/Novità" >Novità</NavLink>
                <NavLink to="/Catalogo">Catalogo</NavLink>
                <NavLink to="/About">Chi siamo</NavLink>
                <NavLink to="/Account">Account</NavLink>
            </div>
        </nav>
    );
}

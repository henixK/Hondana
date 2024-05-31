import Info from "./Info";
import NavLink from "./NavLink";
import hondana from "../assets/HONDANA.svg";
import { NavigationMenu, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
//icone
import { MapPin, Phone, Mail, Github, Facebook, Twitter } from "lucide-react";



export default function Footer() {


    const white = "white";
    const size = 25;

    return (
        <NavigationMenu className="w-full bg-red-japan lg:flex lg:items-center relative">
            <section className="w-full h-full my-10 flex items-center justify-between px-10 py-12 lg:py-0 lg:px-10">
                <NavigationMenuList className="flex flex-col lg:flex-row gap-8 lg:gap-6  ">
                    <NavLink to="/Novità">Novità</NavLink>
                    <NavLink to="/Catalogo">Catalogo</NavLink>
                    <NavLink to="/About">Chi siamo</NavLink>
                    <NavLink to="/Account">Account</NavLink>
                </NavigationMenuList>
                <div className="space-y-10">
                    <Link to={"https://github.com/henixK/Hondana"}><Github color={white} size={size} /></Link>
                    <div className="cursor-pointer"><Facebook color={white} size={size} /></div>
                    <div className="cursor-pointer"><Twitter color={white} size={size} /></div>
                </div>
            </section>
            <hr className="border-[0.1px] border-white lg:w-0 w-full lg:h-[200px]" />
            <section className="w-full h-full my-5 items-center flex justify-between px-10 lg:px-10">
                <div className="flex flex-col">
                    <Info text={"Via Filippo de Magistris 69"} ><MapPin /></Info>
                    <Info text={"067794345012"} > <Phone /> </Info>
                    <Info text={"hondana@gmail.it"} > <Mail /> </Info>
                </div>
                <div className="">
                    <img className="lg:w-[300px]" src={hondana} alt="" />
                </div>
            </section>
            <div className="text-center py-2 relative lg:absolute lg:bottom-2 lg:right-10">
                <p className="font-bold text-white text-xs">©2024 Hondana s.r.l.s P.IVA: 15931551004</p>
            </div>
        </NavigationMenu>
    );
}

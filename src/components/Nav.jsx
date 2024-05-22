import NavLink from "./NavLink";
import hondana from "../assets/HONDANA.svg";

export default function Nav() {
    return (
        <nav className="w-full px-2 lg:px-10 py-8 bg-red-japan flex justify-center">
            <img src={hondana} className="w-[100px] lg:w-[200px]" alt="" />
        </nav>
    )
}


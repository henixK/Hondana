import NavLink from "./NavLink";

export default function Nav() {
    return (
        <nav className="w-full bg-purple-400 flex justify-between items-center text-white">
            <h1 className="text-4xl font-bold">LOGO</h1>
            <ul className="">
                <NavLink>catalogo</NavLink>                     
                <NavLink>novita</NavLink>
                <NavLink>carello</NavLink>
                <NavLink>login</NavLink>
            </ul>
        </nav>
    )
}


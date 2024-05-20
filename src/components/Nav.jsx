import NavLink from "./NavLink";

export default function Nav() {
    return (
        <nav className="w-full bg-[#dcbfff] flex justify-between items-center text-white">
            <h1 className="text-4xl text-black font-bold">LOGO</h1>
            <ul className="flex gap-10 justify-center">
                <NavLink>catalogo</NavLink>
                <NavLink>novita</NavLink>
                <NavLink>carello</NavLink>
                <NavLink>login</NavLink>
            </ul>
        </nav>
    )
}


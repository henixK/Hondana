import NavLink from "./NavLink";
export default function Footer() {
    return (
        <footer className="w-full px-20 p-5 bg-fuchsia-400 flex justify-between items-center text-white absolute bottom-0">
            <ul className="flex gap-10 justify-center">
                <NavLink>indirizzo. Via Filippo de Magistris 69</NavLink>
                <NavLink>tel. 06-7794345012</NavLink>
                <NavLink>email. hondana@gmail.it</NavLink>
                <NavLink>P.IVA 16712151006</NavLink>
            </ul>
        </footer>
    );
}

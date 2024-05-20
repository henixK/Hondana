export default function NavLink({children}) {
    return (
        <li className="hover:underline cursor-pointer">{children}</li>
    )
}
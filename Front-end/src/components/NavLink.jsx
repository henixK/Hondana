import { Link } from "react-router-dom";

export default function NavLink({children, to}) {
    return (
        <Link to={to} className="text-white hover:underline cursor-pointer text-lg list-none my-2 w-[100px] font-bold">{children}</Link>
    )
}
export default function NavLink({children}) {
    return (
        <li className="text-white hover:underline cursor-pointer text-xs lg:text-lg list-none my-2 w-[100px] font-bold">{children}</li>
    )
}
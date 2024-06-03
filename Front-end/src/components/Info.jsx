export default function Info({ children, text }) {
    return (
        <div className="flex items-center gap-2 text-xs lg:text-base text-white my-1 p-2 rounded-2xl">
            {children}
            <p className=" cursor-pointer hover:underline underline-offset-2">{text}</p>
        </div>
    )
}
export default function Info ({img, text}) {
    return (
        <div className="flex items-center gap-4 text-xs lg:text-lg text-white my-1 ">
            <img className="w-6 lg:w-8" src={img} alt="" />
            <p>{text}</p>
        </div>
    )
}
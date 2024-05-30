import github from "../assets/Github White Icons.svg";
import x from "../assets/X White Icons.svg";
import instagram from "../assets/Icone Instagram bianche.svg";


export default function Social() {
    return (
        <div className="flex flex-col gap-2">
            <img className="w-8" src={github} alt="" />
            <img className="w-8" src={x} alt="" />
            <img className="w-8" src={instagram} alt="" />
        </div>
    )
}
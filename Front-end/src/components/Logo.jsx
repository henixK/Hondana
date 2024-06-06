import { Link } from "react-router-dom";
import hondana from "../assets/HONDANA.svg";

export default function Logo() {


    return (
        <Link to="/">
            <img src={hondana} className="w-[150px] lg:w-[200px] cursor-pointer" alt="Hondana Logo" />
        </Link>
    )
}
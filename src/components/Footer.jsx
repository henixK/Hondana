import Info from "./Info";
import NavLink from "./NavLink";
import telefono from "../assets/Cellphone - iconSvg.co.svg";
import location from "../assets/Location Pin Html - iconSvg.co.svg";
import mail from "../assets/Email Marketing - iconSvg.co.svg";
import hondana from "../assets/HONDANA.svg";
import Social from "./Social";

export default function Footer() {
    return (
        <footer className="w-full bg-red-japan absolute bottom-0 lg:flex lg:items-center">
            <section className="w-full h-full my-5 flex items-center justify-between px-10 lg:px-10">
                <div>
                    <NavLink>Novità</NavLink>
                    <NavLink>Best seller</NavLink>
                    <NavLink>Carello</NavLink>
                    <NavLink>Account</NavLink>
                </div>
                <Social />
            </section>
            <hr className="border-[0.1px] border-white lg:w-0 w-full lg:h-[200px] " />
            <section className="w-full h-full my-5 items-center flex justify-between px-10 lg:px-10">
                <div className="flex flex-col">
                    <Info img={location} text={"Via Filippo de Magistris 69"} />
                    <Info img={telefono} text={"06-7794345012"} />
                    <Info img={mail} text={"hondana@gmail.it"} />
                </div>
                <div className="n">
                    <img className="lg:w-[300px]" src={hondana} alt="" />
                    
                </div>
            </section>
            <div className="text-center relative lg:absolute lg:right-20 lg:bottom-0 mb-2">
                        <p className="font-bold text-white text-xs">©2024 Hondana s.r.l.s P.IVA: 15931551004</p>
                    </div>
        </footer>
    );
}

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import bgLogin from "../assets/bgLogin.jpeg";
import Registrazione from "../components/Login/Registrazione";


export default function Register() {
    return (
        <>

            <Nav />
            <div className=" w-full h-screen flex flex-col lg:flex-row items-center justify-center px-10 ">
                <div className="flex flex-row-reverse justify-center border rounded-3xl shadow-2xl overflow-hidden">
                    <div className="w-1/2 h-full hidden lg:block object-cover">
                        <img className="w-full object-cover" src={bgLogin} alt="" />
                    </div>
                    <Registrazione/>
                </div>
            </div>
            <Footer />
        </>
    )
}
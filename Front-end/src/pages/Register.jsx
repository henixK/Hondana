import Nav from "../components/Nav";
import Footer from "../components/Footer";
import InputfieldRegistration from "../components/Login/InputFieldRegistration";
import { Link } from "react-router-dom";
import bgLogin from "../assets/bgLogin.jpeg";


export default function Register() {
    return (
        <>
            <Nav />
            <div className=" w-full h-screen flex flex-col lg:flex-row items-center justify-center px-10 ">
                <div className="flex flex-row-reverse justify-center border-2 rounded-3xl overflow-hidden">
                    <div className="w-1/2 h-full hidden lg:block object-cover">
                        <img className="w-full object-cover" src={bgLogin} alt="" />
                    </div>
                    <form action="" className="w-full lg:w-1/2 space-y-7 px-28 border flex flex-col justify-center items-center bg-white">
                        <h1 className="text-5xl font-nuku ">Register</h1>
                        <InputfieldRegistration placeholder={"Name"} />
                        <InputfieldRegistration placeholder={"Cognome"} />
                        <InputfieldRegistration placeholder={"Data nascita"} />
                        <InputfieldRegistration placeholder={"Indirizzo"} />
                        <InputfieldRegistration placeholder={"Password"} />
                        <button type="submit" className="w-1/2 p-4 rounded-full bg-blue-japan text-white font-bold">
                            Register
                        </button>
                        <div className="flex gap-2 my-2">
                            <p>Already have an account?</p>
                            <Link to="/Account"><p className="font-bold">Log in</p></Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LoginForm from "../components/Login/LoginForm";
import bgLogin from "../assets/bgLogin.jpeg";

export default function Account() {
    return (
        <>
            <Nav />
            <div className="h-full lg:h-screen flex flex-col lg:items-center justify-center my-5 px-4 lg:px-24">
                <div>
                    <div className="w-full flex flex-col lg:flex-row-reverse border rounded-2xl overflow-hidden">
                        <div className="w-full hidden lg:block">
                            <img className="w-full object-contain" src={bgLogin} alt="" />
                        </div>
                        <div className="w-full bg-white lg:py-10">
                            <p className="text-3xl text-center my-10 uppercase font-extrabold">login</p>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
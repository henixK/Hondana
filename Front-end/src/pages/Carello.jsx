import Nav from "../components/Nav";
import Footer from "../components/Footer";
import progress from "../assets/progress.jpg";


export default function Carello() {
    return (
        <>
            <Nav />
            <div className="h-screen flex items-center justify-center">
                <img src={progress} alt="" />
            </div>
            <Footer />
        </>
    )
}
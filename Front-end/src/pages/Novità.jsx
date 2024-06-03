import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import jjk from "../assets/copertine/jjk-25.jpg";

export default function Novità() {
    return (
        <>
            <Nav />
            <h1 className="text-center text-5xl font-bold font-nuku my-10">novita della settimana</h1>
            <div className="h-screen">
                <Card img={jjk}title={"Jujutsu Kasien v. 25"} price={"5,20€"} />
            </div>
            <Footer />
        </>
    )
}
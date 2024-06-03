import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import jjk from "../assets/copertine/jjk-25.jpg";


export default function Catalogo() {
    return (
        <>
            <Nav />
            <h1 className="text-center text-5xl font-bold font-nuku my-10">catalogo prodotti</h1>
            <div className="flex h-screen">
                <Card img={jjk}title={"Jujutsu Kasien v. 25"} price={"5,20€"} />
            </div>
            <Footer />
        </>
    )
}
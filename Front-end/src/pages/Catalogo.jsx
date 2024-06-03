import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import cover from "../assets/jjk_14.jpg";
import frame from "../assets/Frame.jpg";

export default function Catalogo() {
    return (
        <>
            <Nav />
            <img src={frame} />
            <div className="flex h-screen">
                <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/>
                <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/>
                <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/>
                <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/>
            </div>
            <Footer />
        </>
    )
}
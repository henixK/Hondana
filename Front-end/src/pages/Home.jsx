import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CarouselDApiDemo from "../components/CarouselBanner";
import Card from "../components/Card";
import jjk from "../assets/copertine/jjk-25.jpg";


export default function Home() {

    return (
        <>
            <Nav />
            <div className="h-full">
                <CarouselDApiDemo />
                <div className="h-screen">
                    <h1 className="text-center text-3xl font-bold font-nuku my-10">Nuove Uscite</h1>
                    <Card img={jjk}title={"Jujutsu Kaisen v. 25"} price={"5,20€"} />
                </div>
            </div>
            <Footer />
        </>
    )
}
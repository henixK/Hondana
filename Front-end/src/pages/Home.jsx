import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CarouselDApiDemo from "../components/CarouselBanner";
import Card from "../components/Card";


export default function Home() {

    return (
        <>
            <Nav />
            <div className="h-full">
                <CarouselDApiDemo />
                <div className="h-screen border-2 border-black">
                    <h1 className="text-center text-3xl font-bold font-nuku my-10">Nuove Uscite</h1>
                    <Card title={"Ciao"} price={"Ciao"} />
                </div>
            </div>
            <Footer />
        </>
    )
}
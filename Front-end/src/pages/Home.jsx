import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CarouselDApiDemo from "../components/CarouselBanner";

export default function Home() {

    return (
        <>
            <Nav />
            <div className="h-screen">
                <CarouselDApiDemo/>
                <h1 className="text-center text-5xl font-bold font-nuku my-10">Nuove Uscite</h1>
                
            </div>
            <Footer />
        </>
    )
}
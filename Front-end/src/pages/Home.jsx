import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CarouselDApiDemo from "../components/CarouselBanner";
import Card from "../components/Card";


export default function Home() {

    return (
        <>
            <Nav />
            <div className="h-full text-center">
                <CarouselDApiDemo />
                <div className="h-full">
                    <h2 className="text-center text-3xl font-nuku my-10">Nuove Uscite</h2>
                    <div className="flex my-10">
                        <Card title={"Ciao"} price={"Ciao"} />
                        <Card title={"Ciao"} price={"Ciao"} />
                        <Card title={"Ciao"} price={"Ciao"} />
                    </div>

                </div>
                <div className="my-10">
                    <h2 className="text-center text-3xl font-nuku my-10">I manga selezionati dal team</h2>
                    <div className="flex">
                        <Card title={"Ciao"} price={"Ciao"} />
                        <Card title={"Ciao"} price={"Ciao"} />
                        <Card title={"Ciao"} price={"Ciao"} />
                    </div>
                </div>
                <div>
                    <h2 className="font-nuku my-10 text-2xl">le vostre recensioni</h2>
                </div>
            </div>
            <Footer />
        </>
    )
}
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CarouselDApiDemo from "../components/CarouselBanner";
import Card from "../components/Card";
import jjk from "../assets/copertine/jjk-25.jpg";
import slave from "../assets/copertine/slave-10.jpg";
import mash from "../assets/copertine/mashle-2.jpg";
import solo from "../assets/copertine/solo-17.jpg";
import db from "../assets/copertine/db-25.jpg";
import speziale from "../assets/copertine/speziale-1.jpg";
import tokyo from "../assets/copertine/tokyo-27.jpg";
import hero from "../assets/copertine/hero-38.jpg";
import gear from "../assets/figure/gear-5.jpg";
import sukuna from "../assets/figure/sukuna.jpg";
import tengen from "../assets/figure/tengen.jpg";
import goku from "../assets/figure/goku.jpg";


export default function Home() {

    return (
        <>
            <Nav />
            <div className="h-full text-center">
                <CarouselDApiDemo />
                <h1 className="text-center text-7xl font-bold font-nuku my-5 pt-4">Nuove Uscite</h1>
                <div className="cursor-pointer flex justify-center gap-[120px]">
                    <Card img={jjk} title={"Jujutsu Kaisen"} vol={"volume 25"} price={"5,20€"} />
                    <Card img={slave} title={"Demon Slave"} vol={"volume 10"} price={"5,20€"} />
                    <Card img={mash} title={"Mashle"} vol={"variant- volume 2"} price={"6,50€"} />
                    <Card img={solo} title={"Solo Leveling"} vol={"volume 17"} price={"9,90€"} />
                </div>
                <div className="flex justify-center pt-6">
                    <button className="bg-blue-japan text-white px-5 py-2 rounded-xl text-xl font-semibold hover:bg-light-blue-japan">Tutte le novità</button>
                </div>
                <h1 className="text-center text-7xl font-bold my-5 pt-9">Consigliati</h1>
                <div className="cursor-pointer flex justify-center gap-[120px]">
                    <Card img={db} title={"Dragon Ball"} vol={"volume 25"} price={"14,90€"} />
                    <Card img={speziale} title={"I Diari della Speziale"} vol={"volume 1"} price={"6,50€"} />
                    <Card img={tokyo} title={"Tokyo Revengers"} vol={"volume 27"} price={"6,50€"} />
                    <Card img={hero} title={"My Hero Academia"} vol={"volume 38"} price={"5,20€"} />
                </div>
                <div className="flex justify-center pt-6">
                    <button className="bg-blue-japan text-white px-5 py-2 rounded-xl text-xl font-semibold hover:bg-light-blue-japan">Catalogo</button>
                </div>
                <h1 className="text-center text-7xl font-bold my-5 pt-9">Funko Pop</h1>
                <div className="cursor-pointer flex justify-center gap-[120px]">
                    <Card img={gear} title={"Luffy Gear Five"} vol={"One Piece"} price={"18,90€"} />
                    <Card img={sukuna} title={"Ryomen Sukuna"} vol={"Jujutsu Kaisen"} price={"28,90€"} />
                    <Card img={tengen} title={"Tengen Uzui"} vol={"Demon Slayer"} price={"18,90€"} />
                    <Card img={goku} title={"Super Sayan Goku"} vol={"Dragon Ball"} price={"18,90€"} />
                </div>
                <div className="flex justify-center pt-6">
                    <button className="bg-blue-japan text-white px-5 py-2 rounded-xl text-xl font-semibold hover:bg-light-blue-japan">Altri Funko</button>
                </div>
                <h1 className="text-center text-7xl font-bold my-5 pt-9">Recensioni</h1>
            </div>
            <Footer />
        </>
    )
}
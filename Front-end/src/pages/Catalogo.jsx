import Nav from "../components/Nav";
import Footer from "../components/Footer";
import progress from "../assets/progress.jpg";
import GiphyEmbed from "../components/gif";


export default function Catalogo() {
    return (
        <>
            <Nav />
            {/*           <img src={frame} /> */}
            
            {/*             <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/>
                <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/>
                <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/>
                <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/> */}
            <div className="h-screen flex flex-col gap-10 items-center justify-center">
            <h1>catalogo</h1>
                <GiphyEmbed/>
            </div>
            <Footer />
        </>
    )
}
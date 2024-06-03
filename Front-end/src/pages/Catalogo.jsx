import Nav from "../components/Nav";
import Footer from "../components/Footer";
import progress from "../assets/progress.jpg";



export default function Catalogo() {
    return (
        <>
            <Nav />
            {/*           <img src={frame} /> */}
            <h1>catalogo</h1>
            {/*             <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/>
                <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/>
                <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/>
                <Card img={cover} title={"Jujutsu Kaisen 14"} price={"5.20 €"}/> */}
            <div className="h-screen flex items-center justify-center">
                <img src={progress} alt="" />
            </div>
            <Footer />
        </>
    )
}
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GiphyEmbed from "../components/gif";


export default function Carello() {
    return (
        <>
            <Nav />
            <div className="h-screen flex items-center justify-center">
                <GiphyEmbed />
            </div>
            <Footer />
        </>
    )
}
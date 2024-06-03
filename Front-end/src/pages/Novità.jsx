import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GiphyEmbed from "../components/gif";



export default function Novità() {
    return (
        <>
            <Nav />

            <div className="h-screen flex flex-col gap-10 items-center justify-center">
                <h1>novita</h1>
                <GiphyEmbed />
            </div>
            <Footer />
        </>
    )
}
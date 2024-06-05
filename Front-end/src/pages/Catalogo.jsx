import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import jjk from "../assets/copertine/jjk-25.jpg";
import GiphyEmbed from "../components/gif";

export default function Catalogo() {
  return (
    <div>
      <Nav />
        <div className="flex flex-col gap-10 items-center justify-center h-screen">
          <h1>catalogo</h1>
          <GiphyEmbed />
        </div>
      <Footer />
    </div>
  );
}

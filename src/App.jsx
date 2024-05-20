import Nav from "./components/Nav";
import Footer from "./components/Footer";
import jjk_14 from "./assets/jjk_14.jpg"

function App() {

  return (
    <div className="bg-white h-screen">
      <Nav />
      <div className="uppercase text-xl  bg-orange-300 font-bold text-black">
        <img src={jjk_14} alt="jjk 14" />
        jujutsu kaisen - vol.14
        <p>5,20 €</p>
      </div>
      <Footer />
    </div>
  )
}

export default App

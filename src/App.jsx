import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Registrazione from "./pages/Registrazione";
import connessioneDB from "./DataBaseConnection/index.php";

function App() {

  return (
    <div>
    <connessioneDB>
      {/* <Nav />
      <Footer /> */}  
      <Registrazione/>
      </connessioneDB>
    </div>
  )
}


export default App

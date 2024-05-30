import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Catalogo from './pages/Catalogo';
import Novità from './pages/Novità';
import Account from './pages/Account';
import Carrello from "./pages/Carrello";
import Register from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/Novità" element={<Novità />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Carrello" element={<Carrello />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App;

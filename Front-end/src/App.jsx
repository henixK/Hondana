import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Catalogo from './pages/Catalogo';
import Novità from './pages/Novità';
import Account from './pages/Account';
import Carello from "./pages/Carello";
import Register from './pages/Register';
import Funko from './pages/Funko';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/Funko" element={<Funko />} />
        <Route path="/Novità" element={<Novità />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Carello" element={<Carello />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App;

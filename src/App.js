import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componente/Header';
// NO colocar la extension js
/*traeme el componente Header desde la ruta para llegar al JS*/
 import Nav from './componente/Nav';
import Footer from './componente/Footer';
import Homepage from './pages/Homepage';
import Ejemplo1 from './pages/Ejemplo1';
/*importame el componete Homepage del archivo Hompage*/

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/ejemplo1' element={<Ejemplo1 />} />
    </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}


export default App;

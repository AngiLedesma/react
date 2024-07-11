import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
// NO colocar la extension js
/*traeme el componente Header desde la ruta para llegar al JS*/
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';
import Homepage from './pages/Homepage';
import Ejemplo1 from './pages/Ejemplo1';
import Ejemplo2 from './pages/ejemplo2';
import Ejemplo3 from './pages/Ejemplo3';

/*importame el componete Homepage del archivo Hompage*/


function App() {
  return (
    <div className="App">
      {/*  <Header > <Header />*/}
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/ejemplo1' element={<Ejemplo1 />} />
          <Route path='/ejemplo2' element={<Ejemplo2 />} />
          <Route path='/ejemplo3' element={<Ejemplo3 />} />
          {/*aca van los link*/}
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}


export default App;

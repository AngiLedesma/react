import './App.css';
import Header from './componente/Header';
// NO colocar la extension js
/*traeme el componente Header desde la ruta para llegar al JS*/
import Nav from './componente/Nav';
import Footer from './componente/Footer';

function App() {
  return (
    <div className="App">

      <Header />
      <Nav />
      <Footer/>

    </div>
  );
}


export default App;

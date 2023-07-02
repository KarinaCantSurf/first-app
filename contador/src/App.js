import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import animeLogo from './imagenes/anime-logo.jpg';
import {useState} from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
   setNumClics(0);
  }

  return (
    <div className="App">
      <div className='anime-logo-contenedor'>
     <img
     className='anime-logo'
     src={animeLogo}
     alt='Logo de Anime' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>

        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClick={manejarClick} />

        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

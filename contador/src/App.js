import './App.css';
import animeLogo from './imagenes/anime-logo.jpg';
import Boton from './componentes/Boton';

function App() {

  const manejarClick = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
     console.log('Reiniciar');
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

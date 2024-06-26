import './App.css';
import cube from './Imagenes/logo192.png';
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

    const [numClics, setNumClics] =  useState(0);
    const [flash, setFlash] = useState(false);

  
  const manejarClic = () => {
    setNumClics(numClics + 1);
    triggerFlash();
  }

  const reiniciarContador = () => {
    setNumClics(0);
    triggerFlash();
  }

  const triggerFlash = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 100); // Vuelve a false después de 100ms
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={cube}
          alt='Logo de freecodecamp'
          />
        </div>
        <div className='contenedor-principal'>
        <Contador numClics={numClics} flash={flash} />
          <Boton
            texto='Click'
            esBotonDeClic={true}
            manejarClic={manejarClic}
            />
          <Boton
              texto='Reiniciar'
              esBotonDeClic={false}
              manejarClic={reiniciarContador}
          />
        </div>
    </div>
  );
}

export default App;
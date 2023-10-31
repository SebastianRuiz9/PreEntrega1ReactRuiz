import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import CartWidget from './components/CartWidget';

function App() {
  const greetingMessage = "¡Gracias por visitar nuestra tienda en línea!";
  
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={greetingMessage} /> {/* Pasa la prop greeting aquí */}
    </div>
  );
}

export default App;

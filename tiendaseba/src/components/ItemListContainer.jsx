import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className>
      <div className>
        <div className>
          <h2>Bienvenido a nuestra tienda en línea</h2>
          <p>{greeting}</p> 
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;

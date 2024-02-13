
import React from 'react';
import Button from './Button';

const App = () => {
  const handleClick = () => {
    console.log('Botón clickeado!');
  };

  return (
    <div>
      <Button color="red" label="Clickea aquí" onClickCallback={handleClick} />
    </div>
  );
};

export default App;

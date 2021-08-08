import React, { useContext } from 'react';
import { CartContext } from './components/CartContext';

const Home = () => {
  const { value, setValue, plusButton } = useContext(CartContext);

  const minButton = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue(value);
    }
  };

  return (
    <div className="container">
      <h1>Home {value}</h1>
      <button className="btn btn-primary" onClick={plusButton}>
        Add
      </button>
      <button className="btn btn-danger" onClick={minButton}>
        Minus
      </button>
    </div>
  );
};

export default Home;

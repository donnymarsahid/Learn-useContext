import React, { useContext } from 'react';
import { CartContext } from './components/CartContext';

const About = () => {
  const { value } = useContext(CartContext);

  return (
    <div className="container">
      <h1>About {value}</h1>
    </div>
  );
};

export default About;

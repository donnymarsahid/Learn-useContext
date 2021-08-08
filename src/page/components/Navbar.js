import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { value } = useContext(CartContext);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            useContext
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <Link class="nav-link active" to="/">
                Home
              </Link>
              <Link class="nav-link active ms-4 me-4" to="/about">
                About
              </Link>
              <p class="nav-link active m-0">Cart ({value})</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

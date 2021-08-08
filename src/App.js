import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './page/About';
import Navbar from './page/components/Navbar';
import Home from './page/Home';
import { useState } from 'react';
import { CartContext } from './page/components/CartContext';

function App() {
  const [value, setValue] = useState(0);

  const plusButton = () => {
    setValue(value + 1);
  };

  return (
    <>
      <Router>
        <CartContext.Provider value={{ value, setValue, plusButton }}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;

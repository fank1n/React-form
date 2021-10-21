import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./homePage/Home"
import About from "./aboutPage/About"
import Modal from "./modal/Modal"
import { useState } from "react";

const App = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <Router>
    <div className="App">
      <div className="container">
        <header>
          <div className="inner-cont">
            <button 
            className="login-btn" 
            onClick = {() => setModalActive(true)}
            >
            login
            </button>
            <div className = "outer-cart-info-container">
              <p className = "cart-info"> В корзине X товаров на сумму Y</p>
            </div>
          </div>
          <div className= "lil-container">
            <div className= "item-container">
              <a href = "/" className="page-ref">Home</a>
            </div>
            <div className = "item-container-disabled">
              <a href = "/about" className="page-ref">About</a>
            </div>
          </div>
        </header>
        <Modal
          active = {modalActive} 
          setActive = {setModalActive}
        >
        </Modal>
      
      <Switch>
        <Route 
          exact
          path="/"
          component = {Home}
          />

        <Route 
          exact
          path="/about"
          component = {About}
          />
      </Switch>
      </div>
    </div>
    </Router>
  );
};
export default App;

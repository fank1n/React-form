import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./homePage/Home"
import About from "./aboutPage/About"
import Description from "./descriptionPage/Descriptrion";
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
              <Link to = "/" className="page-ref">Home</Link>
            </div>
            <div className = "item-container">
              <Link to = "/about" className="page-ref">About</Link>
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
        <Route 
          exact
          path="/product/:productID"
          component = {Description}
          />
      </Switch>
      </div>
    </div>
    </Router>
  );
};
export default App;

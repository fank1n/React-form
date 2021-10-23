import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./homePage/Home";
import About from "./aboutPage/About";
import Description from "./descriptionPage/Descriptrion";
import Modal from "./modal/Modal";
import { useState, useEffect } from "react";
import Context from "./context";

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [cartInfo, setCartInfo] = useState([]);
  const [inStock, setInStock] = useState([]);
  const [isAddedProduct, setIsAddedProduct] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInStock(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/cart")
      .then((response) => response.json())
      .then((data) => setCartInfo(...data));
  }, []);

  const handlerPutCart = async (product, prodCount = 1) => {
    setIsAddedProduct(() => !isAddedProduct)
    let [inStockItem] = [inStock.find(item => item.id === product.id)]
    inStockItem.inStock -= prodCount
    setInStock((previous) => {
      return [
        ...previous.filter(item => item.id !== product.id),
        inStockItem
      ]
    })
    setCartInfo((previous) => {
      return {
        ...previous,
        count: Number(previous.count) + 1,
        amount: Number(previous.amount) + Number(product.price),
      };
    });
    
    fetch(`http://localhost:8000/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: product.id,
        picture: product.picture,
        title: product.title,
        price: product.price,
        inStock: inStockItem.inStock,
        fullDescription: product.fullDescription
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };

    fetch(`http://localhost:8000/cart/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        count: 0,
        amount: 0,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log(error);
      });

  return (
    <Context.Provider
      value={{
        cartInfo,
        setCartInfo,
        handlerPutCart,
        inStock,
        isAddedProduct,
      }}
    >
      <Router>
        <div className="App">
          <div className="container">
            <header>
              <div className="inner-cont">
                <button
                  className="login-btn"
                  onClick={() => setModalActive(true)}
                >
                  login
                </button>
                <div className="outer-cart-info-container">
                  <div className="cart-container">
                    <p className="cart-count">
                      Товаров в корзине: {cartInfo.count} шт.
                    </p>
                    <p className="cart-amount">
                      На сумму: {cartInfo.amount} руб.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lil-container">
                <div className="item-container">
                  <NavLink to="/" className="page-ref">
                    Home
                  </NavLink>
                </div>
                <div className="item-container">
                  <NavLink to="/about" className="page-ref">
                    About
                  </NavLink>
                </div>
              </div>
            </header>
            <Modal active={modalActive} setActive={setModalActive}></Modal>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/product/:productID" component={Description} />
            </Switch>
          </div>
        </div>
      </Router>
    </Context.Provider>
  );
};

export default App;

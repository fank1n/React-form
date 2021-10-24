import "./Home.css";
import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Context from "../context";

const Home = () => {
  const {
    inStock,
    cartInfo,
    setCartInfo,
    handlerPutCart,
    succesLogin,
    setSuccesLogin,
    formValid,
    setFormValid,
  } = useContext(Context);

  return (
    <div id="items-container">
      <div className="items">
        {inStock
          .sort((a, b) => a.id - b.id)
          .map((product) => (
            <div className="prod" key={product.id}>
              <img src={product.picture} height="150px" width="150px"></img>
              <br />
              <Link to={`/product/${product.id}`} className="prod-title">
                {product.title}
              </Link>
              <p className="prod-price">{product.price} руб.</p>
              {formValid ? (
                <button
                  className="add-to-cart-btn"
                  onClick={() => handlerPutCart(product)}
                >
                  Добавить в корзину
                </button>
              ) : (
                <p>
                  Чтобы добавить товар, <br />
                  авторизируйтесь
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;

import "./Home.css";
import { useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Context from "../../context";
import { useSelector } from "react-redux";

const Home = () => {
  const { handlerPutCart, formValid } = useContext(Context);
  const products = useSelector((state) => state.products);
  return (
    <div id="items-container">
      <div className="items">
        {products
          .sort((a, b) => a.id - b.id)
          .map((product) => (
            <div className="prod" key={product.id}>
              <img
                className="prod-image"
                src={product.image}
                height="150px"
                width="150px"
              ></img>
              <br />
              <Link to={`/product/${product.id}`} className="prod-title">
                {product.title}
              </Link>
              <p className="prod-price">{product.price} $.</p>
              <p>Товара в наличии: {product.rating.count}</p>
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

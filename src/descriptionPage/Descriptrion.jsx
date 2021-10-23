import "./Description.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import Context from "../context";

const Description = () => {
  const { productID } = useParams();
  const { handlerPutCart, isAddedProduct} = useContext(Context);
  const [product, setProduct] = useState([])


  useEffect(() => {
    fetch(`http://localhost:8000/products/${productID}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, [isAddedProduct]);

  return (
    product && (
      <div id="desc-container">
        <div className="desc-prod">
          <img
            className="desc-img"
            src={product.picture}
            height="300px"
            width="300px"
          ></img>
          <p className="desc-prod-price">{product.price} руб.</p>
          <p className="desc-prod-title">{product.title}</p>
          <p className="desc-prod-instock">
            Товара в наличии: {product.inStock} шт.
          </p>
          <div className="desc-btn-selector">
            <button
              className="desc-add-to-cart-btn"
              onClick={() => handlerPutCart(product)}
            >
              Добавить в корзину
            </button>
            <select className="desc-selector">
              <option>1</option>
              <option>2</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <p className="desc-full-description">{product.fullDescription}</p>
      </div>
    )
  );
};

export default Description;

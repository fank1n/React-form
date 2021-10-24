import "./Description.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import Context from "../context";

const Description = () => {
  const { productID } = useParams();
  const { handlerPutCart, isAddedProduct} = useContext(Context);
  const [product, setProduct] = useState([])
  const [option, setOption] = useState(1)

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
            {(product.inStock > 0) 
            ? <button
              className="desc-add-to-cart-btn"
              onClick={() => handlerPutCart(product, option)}
              >
                Добавить в корзину
              </button>
            : <button
              className="desc-add-to-cart-btn"
              disabled
              >
                Not available  
              </button>
            }
            <select onChange = {(e) => setOption(e.target.value)} className="desc-selector">
              <option  disabled = {product.inStock - 1 < 0}>1</option>
              <option  disabled = {product.inStock - 2 < 0}>2</option>
              <option  disabled = {product.inStock - 4 < 0}>4</option>
            </select>
          </div>
        </div>
        <p className="desc-full-description">{product.fullDescription}</p>
      </div>
    )
  );
};

export default Description;

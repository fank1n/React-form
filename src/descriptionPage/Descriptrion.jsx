import "./Description.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
const Description = () => {
  const [product, setProduct] = useState([]);
  const {productID} = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/products/${productID}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, []);
  
  return (
    product && <div id = "desc-container">
          <div className="desc-prod">
            <img className='desc-img' src={product.picture} height="300px" width="300px"></img>
            <p className="desc-prod-price">{product.price} руб.</p>
            <p className="desc-prod-title">{product.title}</p>
            <p className="desc-prod-instock">Товара в наличии: {product.inStock}</p>
            <button
              className="desc-add-to-cart-btn"
              // onClick = {}
            >
              Добавить в корзину
            </button>
          </div>
          <p className = "desc-full-description">{product.fullDescription}</p>
    </div>
  );
};

export default Description;

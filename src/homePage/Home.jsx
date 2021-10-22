import "./Home.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router, Link} from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/products")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProducts(data);
        });
    }, []);
    
    return (
        <div id = "items-container">
        <div className = 'items'>{products.map((products) =>(
            <div className = "prod" key = {products.id}>
            <img src = {products.picture} height = '120px' width = '120px'></img><br/>
            <Link to = {`/product/${products.id}`} className = "prod-title">{products.title}</Link>
            <p className = "prod-price">{products.price} руб.</p>
            <button 
            className = "add-to-cart-btn"
            // onClick = {}
            >Добавить в корзину</button>
            </div>
        ))}</div>
        </div>
    );
};
export default Home;
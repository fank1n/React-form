import "./Home.css";
import { useState, useEffect } from "react";
const Home = () => {
    const [products, setProducts] = useState([]);
    // const [cart, setCart]
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
            <img src = {products.picture} height = '120px' width = '120px'></img>
            <p className = "prod-title">{products.title}</p>
            <p className = "prod-price">{products.price} руб.</p>
            <button 
            className = "add-to-cart-btn"
            // onClick = {}
            >Добавить в корзину</button>
            </div>
        ))}</div>
        </div>
    )
}
export default Home;
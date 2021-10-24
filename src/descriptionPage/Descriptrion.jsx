import "./Description.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import Context from "../context";

const Description = () => {
  const { productID } = useParams();
  const { handlerPutCart, isAddedProduct, formValid, isAdmin} = useContext(Context);
  const [product, setProduct] = useState([]);
  const [option, setOption] = useState(1);
  const [editorMode, setEditorMode] = useState(false)
  const [info, setInfo] = useState({
      formData: {    
      title: '',
      count: '',
      description: ''
    },
    isSubmitted : false
  })

  useEffect(() => {
    fetch(`http://localhost:8000/products/${productID}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, [isAddedProduct]);

  const submitForm = (e) => {
    setEditorMode(false);
    e.preventDefault();
    fetch(`http://localhost:8000/products/${productID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          picture: product.picture,   
          title: info.formData.title,
          price: product.price,
          inStock: Number(info.formData.count),
          fullDescription: info.formData.description
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log(error);
      });

      setProduct(previous => {
        return{
          ...previous,
          title: info.formData.title,
          inStock: Number(info.formData.count),
          fullDescription: info.formData.description
        }
      })
  };

  const changeForm = ({ target: { name, value } }) => {

    setInfo((previous) => {
      if (name === "title") 
        return {
          ...previous,
          formData: {
            ...previous.formData,
            [name]: value,
          },
          isSubmitted: false,
        };
      

      if (name === "count"){
        return {
          ...previous,
          formData: {
            ...previous.formData,
            [name]: value,
          },
          isSubmitted: false,
        };
      }

      if (
        (name === "description") &&
        value.length < 600
      ) {
        return {
          ...previous,
          formData: {
            ...previous.formData,
            [name]: value,
          },
          isSubmitted: false,
        };
      }
    });
  };
  return (
    product && !editorMode ?(
      <div id="desc-container">
        <div className="desc-prod">
          <img
            className="desc-img"
            src={product.picture}
            height="300px"
            width="300px"
            alt=""
          ></img>
          <p className="desc-prod-price">{product.price} руб.</p>
          <p className="desc-prod-title">{product.title}</p>
          <p className="desc-prod-instock">
            Товара в наличии: {product.inStock} шт.
          </p>
          <div className="desc-btn-selector">
            {product.inStock > 0 && formValid ? (
              <button
                className="desc-add-to-cart-btn"
                onClick={() => handlerPutCart(product, option)}
              >
                Добавить в корзину
              </button>
            ) : (
              <button className="desc-add-to-cart-btn" disabled>
                Not available
              </button>
            )}
            <select
              onChange={(e) => setOption(e.target.value)}
              className="desc-selector"
            >
              <option disabled={product.inStock - 1 < 0}>1</option>
              <option disabled={product.inStock - 2 < 0}>2</option>
              <option disabled={product.inStock - 4 < 0}>4</option>
            </select>
          </div>
          {isAdmin ? <button className='editor-btn' onClick = {() => setEditorMode(true)}>Edit</button> : null}
          
        </div>
        <p className="desc-full-description">{product.fullDescription}</p>
      </div>
    )
  :
  <form className='editor-container'>
      <p>Название продукта:</p>
      <input placeholder = "Введите название" name = "title" value = {info.formData.title} onChange = {changeForm}></input>
      <p>Количество на складе:</p>
      <input placeholder = "Количество" name = "count" value = {info.formData.count} onChange = {changeForm}></input>
      <p>Описание:</p>
      <textarea placeholder = "Подробное описание продукта" cols="60" rows="8" name="description" value={info.formData.description} onChange = {changeForm}></textarea>
      <button className='editor-save-btn' onClick = {submitForm}>Сохранить изменения</button>
  </form>
  );
};

export default Description;

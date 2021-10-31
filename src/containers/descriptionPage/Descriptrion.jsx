import "./Description.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import Context from "../../context";
import { setSelectedProduct } from "../../redux/actions/cartActions";
import { connect, useDispatch, useSelector } from "react-redux";

const Description = ({ product }) => {
  const { productID } = useParams();
  const { handlerPutCart, isAddedProduct, formValid, isAdmin } =
    useContext(Context);
  const [option, setOption] = useState(1);
  const [editorMode, setEditorMode] = useState(false);
  const [info, setInfo] = useState({
    formData: {
      title: "",
      count: "",
      description: "",
    },
    isSubmitted: false,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setSelectedProduct(data));
      });
  }, [isAddedProduct]);

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

      if (name === "count") {
        return {
          ...previous,
          formData: {
            ...previous.formData,
            [name]: value,
          },
          isSubmitted: false,
        };
      }

      if (name === "description" && value.length < 600) {
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
  return product && !editorMode ? (
    <div id="desc-container">
      <div className="desc-prod">
        <img
          className="desc-img"
          src={product.image}
          height="300px"
          width="300px"
          alt=""
        ></img>
        <p className="desc-prod-price">{product.price} $.</p>
        <p className="desc-prod-title">{product.title}</p>
        <p className="desc-prod-instock">
          Товара в наличии: {product?.rating?.count} шт.
        </p>
        <div className="desc-btn-selector">
          {product?.rating?.count > 0 && formValid ? (
            <button
              className="desc-add-to-cart-btn"
              onClick={() => handlerPutCart(product, Number(option))}
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
        {isAdmin ? (
          <button className="editor-btn" onClick={() => setEditorMode(true)}>
            Edit
          </button>
        ) : null}
      </div>
      <p className="desc-full-description">{product.description}</p>
    </div>
  ) : (
    <form className="editor-container">
      <p>Название продукта:</p>
      <input
        placeholder="Введите название"
        name="title"
        value={info.formData.title}
        onChange={changeForm}
      ></input>
      <p>Количество на складе:</p>
      <input
        placeholder="Количество"
        name="count"
        value={info.formData.count}
        onChange={changeForm}
      ></input>
      <p>Описание:</p>
      <textarea
        placeholder="Подробное описание продукта"
        cols="60"
        rows="8"
        name="description"
        value={info.formData.description}
        onChange={changeForm}
      ></textarea>
      <button className="editor-save-btn">Сохранить изменения</button>
    </form>
  );
};
const mapStateToProps = (state) => ({ product: state.product });
export default connect(mapStateToProps)(Description);

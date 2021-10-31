import { useSelector } from "react-redux";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { closeCart } from "../../redux/actions/cartActions";

export const Cart = () => {
  const dispatch = useDispatch();
  const handlerCloseCart = () => {
    dispatch(closeCart());
  };
  const cartItems = useSelector((store) => store.cart);
  return (
    <div className="cart-modal-container">
      <div className="cart-modal-header-container">
        <h2>Your Cart Summary</h2>
        <img
          className="cart-modal-close-btn"
          src="https://cdn-icons-png.flaticon.com/512/659/659891.png"
          alt="cross"
          onClick={() => handlerCloseCart()}
        />
      </div>
      <div className="cart-modal-products">
        {cartItems
          .sort((a, b) => a.id - b.id)
          .map((cartItem) => (
            <div className="cart-prod-item" key={cartItem.id}>
              <img
                className="prod-image"
                alt="prod-image"
                src={cartItem.image}
              />
              <p>{cartItem.title}</p>
              <p>{cartItem.price}$</p>
              <p>Quantity: {cartItem.count}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

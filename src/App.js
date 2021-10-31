import cartIconLogo from "./icons/cart_icon.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./containers/homePage/Home";
import About from "./containers/aboutPage/About";
import Description from "./containers/descriptionPage/Descriptrion";
import Modal from "./containers/modal/Modal";
import {useState, useEffect} from "react";
import Context from "./context";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {fetchProducts} from "./api/products";
import {Cart} from "./containers/Cart/Cart";
import {
  openCart,
  addProductToCart,
} from "./redux/actions/cartActions";

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [isAddedProduct, setIsAddedProduct] = useState(true);
  const [succesLogin, setSuccesLogin] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedInfo, setLoggedInfo] = useState({
    userData: [
      {
        login: "admin",
        password: "admin",
      },
      {
        login: "customer",
        password: "customer",
      },
    ],
  });

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartIsOpened = useSelector((state) => state.cartIsOpen);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handlerPutCart = async (product, prodCount = 1) => {
    dispatch(addProductToCart(product.id, prodCount));
  };

  const handlerOpenCart = () => {
    dispatch(openCart());
  };

  return (
    <Context.Provider
      value={{
        handlerPutCart,
        isAddedProduct,
        loggedInfo,
        setLoggedInfo,
        succesLogin,
        setSuccesLogin,
        formValid,
        setFormValid,
        isAdmin,
        setIsAdmin,
      }}
    >
      <Router>
        <div className="App">
          <div className="container">
            <header>
              <div className="inner-cont">
                {!formValid ? (
                  <button
                    className="login-btn"
                    onClick={() => {
                      setModalActive(true);
                    }}
                  >
                    login
                  </button>
                ) : (
                  <button
                    className="login-btn"
                    onClick={() => {
                      setModalActive(true);
                      setFormValid(false);
                    }}
                  >
                    logout
                  </button>
                )}
                {formValid ? (
                  <div className="outer-cart-info-container">
                    <div className="cart-container">
                      <img
                        className="open-cart-btn"
                        src={cartIconLogo}
                        width="35px"
                        height="35px"
                        onClick={() => handlerOpenCart()}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="outer-cart-info-container"></div>
                )}
              </div>
              <div className="lil-container">
                <div className="item-container">
                  <NavLink
                    exact
                    to="/"
                    className="page-ref"
                    activeClassName="page-ref-active"
                  >
                    Home
                  </NavLink>
                </div>
                <div className="item-container">
                  <NavLink
                    exact
                    to="/about"
                    className="page-ref"
                    activeClassName="page-ref-active"
                  >
                    About
                  </NavLink>
                </div>
              </div>
            </header>
            {cartIsOpened ? <Cart /> : null}
            <Modal active={modalActive} setActive={setModalActive}></Modal>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/product/:productID" component={Description} />
              <Route
                render={() => (
                  <h1 className="not-found"> Упс, страница не найдена</h1>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </Context.Provider>
  );
};

export default App;

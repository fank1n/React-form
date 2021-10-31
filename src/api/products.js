import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import {GET_ALL_PRODUCTSS} from "../redux/constants/URLS"
export const fetchProducts = () => {
  return async (dispatch) => {
    axios
      .get(GET_ALL_PRODUCTSS)
      .then((data) => dispatch(setProducts(data.data)))
      .catch((err) => console.log("Error:", err));
  };
};

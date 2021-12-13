import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ShoppingBagContext } from "./context/ShoppingBagContext";
import { fetchProducts } from "./ProductData"; //brings in our mock data
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ShoppingBag from "./pages/ShoppingBag";
//import BagPage from "./pages/BagPage";
import "./App.css";
import Login from "./pages/Login";
import RegisterUserPage from "./pages/RegisterUserPage";
//import ItemCount from "./components/ItemCount";

// we use this object so that we avoid any syntax errors in our dispatch
export const ACTIONS = {
  ADD_TO_BAG: "add-to-bag",
  DELETE_FROM_BAG: "delete-from-bag",
  EMPTY_BAG: "empty-bag",
  TOTAL_BAG_COST: "total-bag-cost",
};

function reducer(productsInBag, action) {
  if (action.type === ACTIONS.ADD_TO_BAG) {
    return [...productsInBag, addNewItem(action.payload)];
  }

  if (action.type === ACTIONS.DELETE_FROM_BAG) {
    return productsInBag.filter((product) => product.id !== action.payload.id);
  }

  if (action.type === ACTIONS.EMPTY_BAG) {
    return (productsInBag = []);
  }
}

function addNewItem(product) {
  return {
    id: uuidv4(), //we give the product an individual title
    title: product.title,
    price: product.price,
    img: product.img,
  };
}

function App() {
  const bagInLocalStorage = window.localStorage.getItem("shoppingBag");

  const initialShoppingBag = bagInLocalStorage
    ? JSON.parse(bagInLocalStorage)
    : [];
  const [productsInBag, dispatch] = useReducer(reducer, initialShoppingBag); //to populate items in bag
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProductList(products);
    });

    window.localStorage.setItem("shoppingBag", JSON.stringify(productsInBag));
  }, [productsInBag]);

  // to update the productsInBag
  const addToBag = (product) => {
    dispatch({ type: ACTIONS.ADD_TO_BAG, payload: product });
  };

  const removeFromBag = (product) => {
    dispatch({ type: ACTIONS.DELETE_FROM_BAG, payload: product });
  };

  const emptyBag = (productsInBag) => {
    dispatch({ type: ACTIONS.EMPTY_BAG, payload: productsInBag });
  };

  const shoppingBagProviderValue = {
    productList,
    productsInBag,
    addToBag,
    removeFromBag,
    emptyBag,
  };

  return (
    <ShoppingBagContext.Provider value={shoppingBagProviderValue}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bag" element={<ShoppingBag />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-user" element={<RegisterUserPage />} />
        </Routes>
      </Router>
    </ShoppingBagContext.Provider>
  );
}

export default App;

import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { ShoppingBagContext } from "../context/ShoppingBagContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import { DarkMode } from "@mui/icons-material";
import App from "../App";

function ShoppingBag() {
  const { productsInBag, removeFromBag, emptyBag } =
    useContext(ShoppingBagContext);

  const totalBagPrice = (arr) => {
    let totalPrice = 0;
    arr.map((item) => {
      totalPrice = totalPrice + item.price;
      return totalPrice;
    });

    return totalPrice / 100;
  };

  const notify = () => toast("Order confirmed!");

  return (
    <div>
      <hr />
      <Stack>
        {productsInBag &&
          productsInBag.map((product) => {
            return (
              <div key={product.id}>
                <img
                  src={product.img}
                  alt={product.title}
                  style={{
                    display: "flex",
                    flexDirection: "inherit",
                    marginLeft: "20px",
                  }}
                  width="auto"
                  height="100px"
                />
                <span style={{ marginLeft: "110px" }}>{product.title}</span>
                <Button
                  variant="contained"
                  style={{
                    display: "flex",
                    float: "right",
                    marginRight: "55px",
                    marginTop: "10px",
                  }}
                  size="small"
                  color="error"
                  endIcon={<DeleteIcon />}
                  onClick={() => {
                    removeFromBag(product);
                  }}
                >
                  REMOVE FROM BAG
                </Button>
              </div>
            );
          })}
      </Stack>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <span
          style={{
            marginTop: "30px",
            marginBottom: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          TOTAL:{" "}
          {productsInBag.length > 0
            ? `$${totalBagPrice(productsInBag)}`
            : `$0.00`}
        </span>
        <div>
          <Link to="/" element={<Home />}>
            <Button
              size="medium"
              variant="contained"
              style={{
                marginRight: "15px",
              }}
            >
              Continue Shopping
            </Button>
          </Link>

          <Button
            size="medium"
            variant="outlined"
            style={{
              marginRight: "15px",
            }}
            onClick={() => {
              emptyBag();
            }}
          >
            Empty Bag
          </Button>
          <Button
            size="medium"
            variant="contained"
            onClick={notify}
            style={{
              marginRight: "15px",
            }}
          >
            <ToastContainer />
            Checkout NOW
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingBag;

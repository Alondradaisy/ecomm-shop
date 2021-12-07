import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Layout from "../components/Layout";
import ReplayIcon from "@mui/icons-material/Replay";
import { useSelector } from "react-redux";
import { useReduxShoppingCart } from "../redux/shoppingCartState";
import App from "../App";

const BagPage = () => {
  const { total, emptyBag } = useReduxShoppingCart();

  const ShoppingBag = useSelector((state) => state.ShoppingBag);

  if (ShoppingBag.length < 1) {
    return <Layout>No items in bag.</Layout>;
  }

  return (
    <Layout>
      <Box>
        {ShoppingBag.map((item) => (
          <Box key={item.id} mb={4}>
            <CartItem item={item} />
          </Box>
        ))}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
        <Box mb={2}>
          <Typography fontWeight="bold">Total: $ {total / 100}</Typography>
        </Box>
        <Box mb={2}>
          <Button
            variant="contained"
            onClick={emptyBag}
            startIcon={<ReplayIcon />}
          >
            Clear Bag
          </Button>
        </Box>
        <Box mb={2}>
          <Link to="/">
            <Button variant="contained">Return to home</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default BagPage;

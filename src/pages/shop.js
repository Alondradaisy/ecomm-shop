import React, { Fragment } from "react";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";

const shop = (children) => {
  return (
    <Layout>
      <Box>Imagine shopping cart here</Box>
    </Layout>
  );
};

export default shop;

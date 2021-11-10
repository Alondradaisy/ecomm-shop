import React from "react";
import Box from "@mui/material/Box";
import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

//sx props {{ allow for material-ui styling }} - different syntax than css naming conventions
//CssBaseline is material-ui's way of structuring a baseline css a
const Layout = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Box sx={{ height: "300px" }}>{children}</Box>
      <Footer />
    </Fragment>
  );
};

export default Layout;

// instead of copying a bunch of the same code for enabling the same pages, you can create a layout page to make a fragment for Layout component. So you can create the fragment in layout component and bring it in through other pages || with Layout component, you have complete control of how you will be able to write dry code

// you can also accomplish this similarly using Main Router using <React.Fragment> <Navbar/> to link to direct paths || with Main Router, you are able to customize and link paths directly giving complete control on what renders in each page and/or customize based on UI components individually
// -> create a <Navbar /> component to display the same code in each page - most pages in UI display a navbar \\

import React from "react";
import { Box, AppBar, Toolbar, IconButton } from "@material-ui/core";
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  return (
    <Box>
      <AppBar
        position="static"
        style={{
          background: "#3A3A3A",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
          }}
        >
          <Link to="/" style={{ width: "33%" }}>
            <MenuIcon sx={{ color: "white" }} />
          </Link>
          <Typography style={{ textAlign: "center", width: "33%" }}>
            <Link to="/" style={{ width: "33%" }}>
              <AppleIcon
                sx={{
                  color: "white",
                  justifyContent: "center",
                  fontSize: "25px",
                }}
              />
            </Link>
          </Typography>
          <Link
            to="/bag"
            style={{
              width: "33%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <IconButton
              size="medium"
              style={{ color: "white" }}
              edge="end"
              aria-label="menu"
            >
              <LocalMallSharpIcon style={{ fontSize: "20px" }} position="end" />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

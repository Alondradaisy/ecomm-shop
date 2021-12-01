import React from "react";
import { Box, AppBar, Toolbar, IconButton } from "@material-ui/core";
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

function NavBar() {
  return (
    <Box>
      <AppBar
        position="static"
        style={{
          background: "#eaafc8",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
          }}
        >
          <Link to="/" style={{ width: "33%" }}>
            <HomeIcon sx={{ color: "white" }} />
          </Link>
          <Typography style={{ textAlign: "center", width: "33%" }}>
            <Link to="/" style={{ width: "33%" }}>
              <WorkspacesIcon
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

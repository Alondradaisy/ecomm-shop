import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
//import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import { logInUser } from "../fetchData";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logInActionCreator } from "../redux/userState";

const Form = (props) => {
  const { setError } = props;

  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(logInActionCreator({ email, password }));
  };

  return (
    <Box>
      <Box mb={4}>
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          value={email}
          onChange={(event) => {
            setCredentials({ password, email: event.target.value });
          }}
        />
      </Box>
      <Box mb={4}>
        <TextField
          id="standard-basic"
          label="password"
          variant="standard"
          type="password"
          value={password}
          onChange={(event) => {
            setCredentials({ email, password: event.target.value });
          }}
        />
      </Box>
      <Box>
        <Button onClick={onSubmit}>User Login</Button>
      </Box>
    </Box>
  );
};

const Login = () => {
  const [error, setError] = useState();
  const user = useSelector((state) => state.user);

  return (
    <NavBar>
      {error}
      {user ? `Welcome back ${user.name}!` : <Form setError={setError} />}
    </NavBar>
  );
};

export default Login;

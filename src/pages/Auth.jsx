import { Alert, Grid, Snackbar } from "@mui/material";
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import {useNavigate} from 'react-router-dom';

const Auth = () => {
  const [notify, setNotify] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email) {
      setNotify({ message: "Please enter Email!", type: "error" });
      return;
    }
    if (!password) {
      setNotify({ message: "Please enter Password!", type: "error" });
      return;
    }
    setNotify({message:"Successfully logged in!",type:"success"});
    setTimeout(()=>{
      navigate('/data');
    },2000)
  };

  return (
    <div className="container authContainer">
      <Grid className="authBox">
        <h1 className="mt-4">Login In to see Patient Records</h1>

        <Input
          placeholder="Please Enter Email"
          classes="mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Input
          placeholder="Please Enter Password"
          classes="mt-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit} classes="mt-12">
          Submit Details!
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={!!notify}
          autoHideDuration={6000}
        >
          <Alert
            onClose={() => setNotify(false)}
            severity={notify?.type}
            variant="filled"
          >
            {notify?.message}
          </Alert>
        </Snackbar>
      </Grid>
    </div>
  );
};

export default Auth;

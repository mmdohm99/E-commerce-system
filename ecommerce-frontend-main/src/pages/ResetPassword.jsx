import React from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const ResetPassword = () => {
  const [newPass, setNewPass] = useState({});

  const handleChangePass = (e) => {
    const { name, value } = e.target;
    setNewPass({ ...newPass, [name]: value });
};
console.log(newPass.password);
console.log(newPass.passwordConfirm)

  const handleSubmitPass = async (e) => {
    e.preventDefault();
    const getPassToken = JSON.parse(localStorage.getItem("resetPasswordToken"));
    console.log(getPassToken)
    const PassEdit = await axios.patch(
      `http://localhost:3000/api/v1/users/resetPassword/${getPassToken}`,
      {
        password: newPass.password,
        passwordConfirm: newPass.passwordConfirm,
      }
    );
    console.log(PassEdit);
  };

  return (
    <form onSubmit={handleSubmitPass}>
      <Grid container spacing={0}>
        <Grid style={{ position: "absolute", left: "60%" }} item xs={2}>
          <TextField
            style={{ width: "300px" }}
            type="password"
            className="input"
            name="passwordConfirm"
            onChange={handleChangePass}
            id="outlined-search"
            label="passwordConfirm"
          />
          <Alert
            className={
              PWD_REGEX.test(newPass.passwordConfirm) === true ||
              newPass.passwordConfirm === ""
                ? "hidden"
                : "visible"
            }
            severity="error"
          >
            Not Valid PasswordConfirm
          </Alert>
        </Grid>
        <Grid style={{ position: "relative", left: "5%" }} item xs={2}>
          <TextField
            style={{ width: "300px" }}
            type="password"
            className="input"
            name="password"
            onChange={handleChangePass}
            id="outlined-search"
            label="Password"
          />
          <Alert
            className={
              PWD_REGEX.test(newPass.password) === true ||
              newPass.password === ""
                ? "hidden"
                : "visible"
            }
            severity="error"
          >
            Not Valid Password
          </Alert>
        </Grid>
      </Grid>

      <Button
        type="submit"
        value="Add User"
        variant="outlined"
        disabled={
          newPass.password !== newPass.passwordConfirm ||
          newPass.password === "" ||
          newPass.passwordConfirm === ""
        }
      >
        Save
      </Button>
    </form>
  );
};

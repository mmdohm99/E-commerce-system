import React from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../context/userContext";
export const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const USER_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const localResponse = JSON.parse(localStorage.getItem("response"));
  // const navigate = useNavigate();
  
  const token = localStorage.getItem("token");
  const userName = localResponse.data.data.user.name;
  const userMail = localResponse.data.data.user.email;
  const userPhone = localResponse.data.data.user.phone;
  //   const userConfirmPass = localResponse.data.data.user.password;
  const [user, setUser] = useState({
    name: userName,
    email: userMail,
    phone: userPhone,
  });
  const [newPass, setNewPass] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const handleChangePass = (e) => {
    const { name, value } = e.target;
    setNewPass({ ...newPass, [name]: value });
    console.log(newPass);
  };
  // console.log(localResponse?.data?.status);
  // console.log(localResponse.data.data.user.name);
  // console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(token);
    const userEdit = await axios.patch(
      "http://localhost:3000/api/v1/users/updateMe",
      {
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
      localStorage.setItem("response", JSON.stringify(userEdit));
    // console.log(userEdit);
  };

  const handleSubmitPass = async (e) => {
    e.preventDefault();
    console.log(token);
    const PassEdit = await axios.patch(
      "http://localhost:3000/api/v1/users/updateMyPassword",
      {
        password: newPass.password,
        passwordConfirm: newPass.passwordConfirm,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(PassEdit);
  };
  // console.log(PassEdit);
  return (
    <Box sx={style}>
      <form onSubmit={handleSubmit}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <h1>Profile</h1>

          <Grid container spacing={0}>
            <Grid style={{ position: "absolute", left: "60%" }} item xs={2}>
              <TextField
                style={{ width: "300px" }}
                type="text"
                className="input"
                name="name"
                value={user.name}
                onChange={handleChange}
                id="outlined-search"
                label="Name "
              />
            </Grid>
            <Grid style={{ position: "relative", left: "5%" }} item xs={2}>
              <TextField
                style={{ width: "300px" }}
                type="text"
                className="input"
                name="email"
                value={user.email}
                onChange={handleChange}
                id="outlined-search"
                label="E-mail "
              />
            </Grid>
          </Grid>

          <Grid container spacing={0}>
            <Grid style={{ position: "relative", left: "61%" }} item xs={2}>
              <TextField
                style={{ width: "300px" }}
                type="text"
                className="input"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                id="outlined-search"
                label="Phone"
              />
            </Grid>
            <Grid style={{ position: "absolute", left: "9%" }} item xs={2}>
              <Button
                style={{ color: "red", border: "1px solid red" }}
                type="button"
                onClick={handleOpen}
              >
                Change Password
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography
                      id="transition-modal-title"
                      variant="h3"
                      component="h2"
                    >
                      Change Password
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 1 }}
                    >
                      <form onSubmit={handleSubmitPass}>
                        <Grid container spacing={0}>
                          <Grid
                            style={{ position: "absolute", left: "60%" }}
                            item
                            xs={2}
                          >
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
                                PWD_REGEX.test(newPass.passwordConfirm) ===
                                  true || newPass.passwordConfirm === ""
                                  ? "hidden"
                                  : "visible"
                              }
                              severity="error"
                            >
                              Not Valid PasswordConfirm
                            </Alert>
                          </Grid>
                          <Grid
                            style={{ position: "relative", left: "5%" }}
                            item
                            xs={2}
                          >
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
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </Grid>
          </Grid>
          <Button className="input" type="submit" variant="outlined">
            {" "}
            Save{" "}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

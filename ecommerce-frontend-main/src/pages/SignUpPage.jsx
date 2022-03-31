import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import axios from "axios";
import {useEffect}from "react"
const USER_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
//Minimum eight characters, at least one letter and one number:
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const SignUpPage = () => {
  useEffect(()=>{
    localStorage.setItem("token","")
  },[])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    defaultValues,
  } = useForm();
  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const navigate = useNavigate();

  //////////////////////////////////////////////////

  const onSubmit = async (user) => {
    console.log("form data here", user);
    
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/signup",
        {
          name: user.name,
          email: user.email,
          password: user.password,
          passwordConfirm: user.passwordConfirm,
          role: user.role,
          phone: user.phone,
          address: {
            country: user.address.country,
            city: user.address.city,
            street: user.address.street,
            zip: user.address.zip,
          },
        }
      );

      console.log(response?.data);
      console.log(response?.data.token);
      response.data.status = "success" && navigate("/login", { replace: true });
    } catch (err) {
      if (!err?.response) {
        // alert("Regestration succe ");
      } else if (err.response?.status === 409) {
        alert("Username Taken");
      } else {
        alert("Registration Failed");
      }
    }

    reset();
  };

  return (
    <Box sx={style}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <h1>SignUp</h1>

          <Grid container spacing={0}>
            <Grid item xs={6}>
              <TextField
                // sx={{ mt: 1 }}
                id="outlined-required"
                label="Email"
                color={errors.email ? "success" : "error"}
                type="text"
                {...register("email", {
                  required: {
                    value: true,
                    pattern: USER_REGEX,
                    message: "email is required!",
                  },
                })}
              />
              {errors.email && (
                <Alert style={{ width: "84%" }} severity="error">
                  Invalid E-mail !
                </Alert>
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={console.log((e) => e.event.target)}
                id="outlined-required"
                label="name"
                color={errors.name ? "success" : "error"}
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required!",
                  },
                })}
              />
              {errors.name && (
                <Alert style={{ width: "84%" }} severity="error">
                  name is required !
                </Alert>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <TextField
                id="outlined-required"
                label="password"
                color={errors.password ? "success" : "error"}
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required!",
                    pattern: PWD_REGEX,
                  },
                })}
                // value={userToEdit ? userToEdit.name : ''}
              />
              {errors.password && (
                <Alert style={{ width: "84%" }} severity="error">
                  Password is required !
                </Alert>
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-required"
                label="passwordConfirm"
                color={errors.passwordConfirm ? "success" : "error"}
                type="password"
                {...register("passwordConfirm", {
                  required: {
                    value: true,
                    message: "passwordConfirm is required!",
                    pattern: PWD_REGEX,
                  },
                })}
                // value={userToEdit ? userToEdit.name : ''}
              />
              {errors.passwordConfirm && (
                <Alert severity="error" style={{ width: "84%" }}>
                  passwordConfirm is required !
                </Alert>
              )}
            </Grid>
          </Grid>

          <Grid container spacing={0}>
            <Grid item xs={6}>
              <TextField
                id="outlined-required"
                label="seller / user"
                color={errors.role ? "success" : "error"}
                type="text"
                {...register("role", {
                  required: {
                    value: true,
                    message: "role is required!",
                  },
                })}
                // value={userToEdit ? userToEdit.name : ''}
              />
              {errors.role && (
                <Alert style={{ width: "84%" }} severity="error">
                  role is required !
                </Alert>
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-required"
                label="city"
                type="text"
                {...register("address.city", {
                  required: true,
                })}
              />

              {errors?.address?.city && (
                <Alert style={{ width: "84%" }} severity="error">
                  required!
                </Alert>
              )}
            </Grid>
          </Grid>

          <Grid container spacing={0}>
            <Grid item xs={6}>
              <TextField
                id="outlined-required"
                label="street"
                type="text"
                {...register("address.street", {
                  required: true,
                })}
              />
              {errors?.address?.street && (
                <Alert style={{ width: "84%" }} severity="error">
                  required!
                </Alert>
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-required"
                label="country"
                type="text"
                {...register("address.country", {
                  required: true,
                })}
              />
              {errors?.address?.country && (
                <Alert style={{ width: "84%" }} severity="error">
                  required!
                </Alert>
              )}
            </Grid>
          </Grid>

          <Grid container spacing={0}>
            <Grid item xs={6}>
              <TextField
                id="outlined-required"
                label="phone"
                color={errors.phone ? "success" : "error"}
                type="text"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "phone is required!",
                  },
                })}
                // value={userToEdit ? userToEdit.name : ''}
              />
              {errors.phone && (
                <Alert severity="error">phone is required !</Alert>
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-required"
                label="zip"
                type="text"
                {...register("address.zip", {
                  required: true,
                })}
              />
              {errors?.address?.zip && (
                <Alert style={{ width: "84%" }} severity="error">
                  required!
                </Alert>
              )}
            </Grid>
          </Grid>

          <Button
            className="input"
            type="submit"
            // disabled={
            // USER_REGEX.test(errors.email) === false ||
            // PWD_REGEX.test(er) === false ||
            // passwordValue !== passwordConfirmValue
            // }
            variant="outlined"
          >
            {" "}
            SignUp{" "}
          </Button>
          <button
            className="textbutton"
            type="button"
            onClick={() => {
              navigate("/login", { replace: false });
            }}
          >
            Already have an account ? LogIn
          </button>
        </Stack>
      </form>
    </Box>
  );
};

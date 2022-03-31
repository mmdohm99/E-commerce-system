import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import InputLabel from "@mui/material/InputLabel";

// import { Paper } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const ShippingCheckOut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    defaultValues,
  } = useForm({
    defaultValues: {
      street: "",
      city: "",
      country: "",
      zip: "",
      buildingNum: "",
    },
  });

  const navigate = useNavigate();
  const onSubmit = (address) => {
    localStorage.setItem("address", JSON.stringify(address));
    navigate(`/cart/payment`, { replace: false });
    console.log(address);
    reset();
  };

  return (
    <div>
      <Box sx={style}>
        <h1>Shipping</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <TextField
              id="outlined-required"
              label="Country"
              type="text"
              {...register("country", {
                required: true,
              })}
            />
            {errors?.country && (
              <Alert severity="error">Country is required!</Alert>
            )}

            <TextField
              id="outlined-required"
              label="City"
              type="text"
              {...register("city", {
                required: true,
              })}
            />
            {errors?.city && <Alert severity="error">City is required!</Alert>}

            <TextField
              id="outlined-required"
              label="Street"
              // color={errors.address ? "success" : "error"}
              type="text"
              {...register("street", {
                required: {
                  value: true,
                  message: "street is required!",
                },
              })}
            />
            {errors.address && (
              <Alert severity="error">Address is required !</Alert>
            )}

            <TextField
              id="outlined-required"
              label="zip Code"
              type="text"
              {...register("zip", {
                required: true,
              })}
            />
            {errors?.zip && (
              <Alert severity="error">zip Code is required!</Alert>
            )}
            <TextField
              id="outlined-required"
              label="buildingNum"
              type="text"
              {...register("buildingNum", {
                required: true,
              })}
            />
            {errors?.buildingNum && (
              <Alert severity="error">buildingNum is required!</Alert>
            )}

            <Button type="submit" variant="contained" color="success">
              Continue
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
};

export default ShippingCheckOut;

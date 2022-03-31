import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";
// import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PayMent = () => {
  const [payMethod, setPayMethod] = useState({});
  const localResponse = JSON.parse(localStorage.getItem("response"));
  const cartItems = JSON.parse(localStorage.getItem("Cart"));
  const orderItems = cartItems.map((item) => ({
    quantity: item.qty,
    price: item.listPrice,
    productId: item._id,
  }));
  const shippingAddress = JSON.parse(localStorage.getItem("address"));
  const userId = localResponse.data.data.user._id;
  // console.log(localResponse.data.data.user._id);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayMethod({ ...payMethod, [name]: value });
    
  };
  const paymentMethod = payMethod.paymentMethod;
  // console.log(shippingAddress);
  // console.log(paymentMethod);
  // console.log(userId);
  // // console.log(cartItems);
  // console.log(orderItems);
  console.log({
    shippingAddress,
    paymentMethod,
    userId,
    orderItems,
  });
  const onSubmit = async (e) => {
    // console.log("form data here");
    // console.log("form data here", );
    e.preventDefault();

    // const v1 = USER_REGEX.test(user.email);
    // const v2 = PWD_REGEX.test(user.password);
    // if (!v1 || !v2) {
    //   alert("Invalid Entry");
    // return;
    // }
    try {
      const response = await axios.post("http://localhost:3000/api/v1/order", {
        shippingAddress,
        paymentMethod,
        userId,
        orderItems,
      });
      alert('Request has been sent')
      console.log(response);
      // response.data.status = "success" && navigate("/login", { replace: true });
    } catch (err) {
      if (!err?.response) {
        // alert("Regestration succe ");
      } else if (err.response?.status === 409) {
        alert("Username Taken");
      } else {
        alert("Registration Failed");
      }
    }
  };

  // const onSave = (payment, e) => {
  //   e.preventDefault();
  //   console.log(payment);
  //   localStorage.setItem("payment", JSON.stringify(payment));
  //   // navigate(`/cart/payment`, { replace: false });
  //   // reset();
  // };

  return (
    <div>
      <Box sx={style}>
        <h1>Payment Method</h1>
        {/* <h3>Select Method</h3> */}
        <FormLabel id="demo-radio-buttons-group-label">Select Method</FormLabel>
        <form onSubmit={onSubmit}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="paymentMethod"
            >
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Credit Card"
                onChange={handleChange}
              />
              <FormControlLabel
                value="cash_on_delivery"
                control={<Radio />}
                label="Cash on delivery"
                onChange={handleChange}
              />
            </RadioGroup>

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
          </Stack>
        </form>
      </Box>
    </div>
  );
};

export default PayMent;

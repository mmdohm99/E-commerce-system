import "../styles/login.css";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
export const LogInPage = () => {
  const [inEmailValue, setInEmailValue] = useState("");
  const [inPasswordValue, setInPasswordValue] = useState("");

  useEffect(()=>{
    localStorage.setItem("token","")
  },[])
  const {
    handleSubmit,
    navigate,
  } = useContext(UserContext);
  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={style}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("working");
          handleSubmit(
            inEmailValue,
            inPasswordValue
          );
        }}
      >
        <Stack sx={{ width: "100%" }} spacing={2}>
          <h1>LogIn</h1>
          <TextField
            className="input"
            onChange={(e) => setInEmailValue(e.target.value)}
            id="outlined-search"
            label="someone@gmail.com "
          />
          <TextField
            className="input"
            onChange={(e) => setInPasswordValue(e.target.value)}
            id="outlined-search"
            label="Password "
          />
          <Button
            className="input"
            type="submit"
            disabled={!inEmailValue || !inPasswordValue}
            variant="outlined"
          >
            {" "}
            Login{" "}
          </Button>
          <button
            className="textbutton"
            type="button"
            onClick={() => {
              navigate("/forgetpassword", { replace: false });
            }}
            
          >
            Forget Password
          </button>

          <button
            className="textbutton"
            type="button"
            onClick={() => {
              navigate("/signup", { replace: true });
            }}
          >
            Dont Have an account ? sign up
          </button>
        </Stack>
      </form>
    </Box>
  );
};

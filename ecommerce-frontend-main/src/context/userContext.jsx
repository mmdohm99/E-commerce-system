import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, createContext } from "react";
export const UserContext = createContext();
export const UserModule = ({ children }) => {
  const navigate = useNavigate();
  const [inEmailValue, setInEmailValue] = useState("");
  const [inPasswordValue, setInPasswordValue] = useState("");
  const [response, setResponse] = useState({});
  //   const { setAuth } = useContext(AuthContext);

  const handleSubmit = async (
    inEmailValue,
    inPasswordValue
    // setInPasswordValue,
    // setInEmailValue
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        {
          email: inEmailValue,
          password: inPasswordValue,
        }
      );
      setResponse(response);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("response", JSON.stringify(response));

      console.log(response);

      //   setInEmailValue("");
      //   setInPasswordValue("");
    } catch (err) {
      if (!err?.response) {
        // alert("Logged in successfully");
      } else if (err.response?.status === 400) {
        alert("Missing Username or Password");
      } else if (err.response?.status === 401) {
        alert("Email or password is wrong");
      } else {
        alert("Login Failed");
      }
    }
    const Token = JSON.parse(localStorage.getItem("token"));
    console.log(Token);
    Token && navigate("/", { replace: true });
  };

  return (
    <UserContext.Provider
      value={{
        handleSubmit,
        response,
        inEmailValue,
        inPasswordValue,
        setInEmailValue,
        setInPasswordValue,
        setResponse,
        navigate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, createContext } from "react";

export const ContactContext = createContext();
export const ContactModule = ({ children }) => {
  const navigate = useNavigate();
  const [conEmailValue, setConEmail] = useState("");
  const [conSubjectValue, setConSubject] = useState("");
  const [conMessageValue, setConMessage] = useState("");
  const [response, setResponse] = useState({});

  const handleSubmit = async (
    conEmailValue,
    conSubjectValue,
    conMessageValue
    // setInPasswordValue,
    // setInEmailValue
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/contactUs",
        {
          email: conEmailValue,
          subject: conSubjectValue,
          message: conMessageValue,
        }
      );
      setResponse(response);
      //   localStorage.setItem("token", JSON.stringify(response.data.token));
      //   localStorage.setItem("response", JSON.stringify(response));

      console.log(response);

      //   setInEmailValue("");
      //   setInPasswordValue("");
    } catch (err) {
      if (response?.status === 201) {
        alert("your message sent successfully");
      } else if (err.response?.status === 400) {
        alert("Please insert a valid email");
        //   } else if (err.response?.status === 401) {
        //     alert("Unauthorized");
      }
      //   else {
      //     alert("Login Failed");
      //   }
    }
    // const Token = JSON.parse(localStorage.getItem("token"));
    // console.log(Token);
    // Token && navigate("/", { replace: true });
  };

  return (
    <ContactContext.Provider
      value={{
        handleSubmit,
        response,
        conEmailValue,
        conSubjectValue,
        conMessageValue,
        setConEmail,
        setConSubject,
        setResponse,
        setConMessage,
        navigate,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

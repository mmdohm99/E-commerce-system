import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";
import { useState, useContext } from "react";
import { ContactContext } from "../context/contactContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AlertDismissible from "../components/Alert";
const ContactUs = () => {
  const [conEmailValue, setConEmail] = useState("");
  const [conSubjectValue, setConSubject] = useState("");
  const [conMessageValue, setConMessage] = useState("");
  const {
    handleSubmit,
  } = useContext(ContactContext);
  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: 700,
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
          alert('Message sent successfully')
          handleSubmit(
            conEmailValue,
            conSubjectValue,
            conMessageValue
            
            );
            
        }
        
      }
      >
        <Stack sx={{ width: "100%" }} spacing={2}>
          <h1>Contact Us</h1>
          <TextField
            className="input"
            onChange={(e) => setConEmail(e.target.value)}
            id="outlined-search"
            label="Email"
          />
          <TextField
            className="input"
            onChange={(e) => setConSubject(e.target.value)}
            id="outlined-search"
            label="Subject "
          />

          <TextField
            id="outlined-multiline-static"
            onChange={(e) => setConMessage(e.target.value)}
            label="Message"
            multiline
            rows={3}
          />

          <Button
            className="input"
            type="submit"
            disabled={!conEmailValue || !conSubjectValue || !conMessageValue}
            // onClick={handleSignIn}
            variant="outlined"
          >
            {" "}
            Send{" "}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
export default ContactUs;

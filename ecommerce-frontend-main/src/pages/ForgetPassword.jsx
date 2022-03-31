import React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useEffect}from"react"
import Alert from "@mui/material/Alert";

const USER_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;



export const ForgetPassword = () => {
    useEffect(()=>{
        localStorage.setItem("resetPasswordToken","")
      },[])
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
    const { register, handleSubmit, formState: { errors }, reset, } = useForm();

    const onSubmit = async (data) => {
        // console.log(data.email)
        

        try {
            const response = await axios.post(
                "http://localhost:3000/api/v1/users/forgotPassword",
                {
                    email:data.email,
                }
                );
                const resetToken=response.data.resetToken
                localStorage.setItem("resetPasswordToken", JSON.stringify(resetToken));
                const getPassToken = JSON.parse(localStorage.getItem('resetPasswordToken'))
                if(getPassToken){
                    navigate('/resetpassword', { replace: false })
                }
            } catch (err) {
                reset()
            }
            // console.log(getPassToken)
            
            
        };
    return (
        <Box sx={style}>
        <h4 style={{textAlign:'center', marginBottom:'15px'}}>Forget Password</h4>
            <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                <TextField
                sx={{ mt: 1, width:'100%' }}
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
                <button className="textbutton" type="submit" style={{width:'25%', borderRadius:'3px', fontSize:'20px', fontWeight:'bold', padding:'15px'}}>Send</button>
                {errors.email && (
                <Alert style={{ width: "84%" }} severity="error">
                    Invalid E-mail !
                </Alert>
                )}



                <Stack sx={{ width: "100%" }} spacing={2}></Stack>
            </form>
        </Box>
    );
    };
//  if(getPassToken)
//                 {(localStorage.setItem("resetPasswordToken", JSON.stringify(resetToken))),
//                 (navigate("/resetpassword", { replace: false }))}
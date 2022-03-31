// import React from "react";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import Grid from "@mui/material/Grid";
// const ChangePass = () => {
//     const [user, setUser] = useState({
//         name: userName,
//         email: userMail,
//         phone: userPhone,
//       });
//   const style = {
//     position: "absolute",
//     top: "30%",
//     left: "50%",
//     transform: "translate(-50%, 0%)",
//     width: 1000,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//     };
    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value });
//         console.log(user);
//       };
      

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(token);
//     const userEdit = await axios.patch(
//       "http://localhost:3000/api/v1/users/updateMe",
//       {
//         name: user.name,
//         email: user.email,
//         phone: user.phone,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     localStorage.setItem("response", JSON.stringify(userEdit));
//     console.log(userEdit);
//   };
//   return (
//     <Box sx={style}>
//       s
//       <form onSubmit={handleSubmit}>
//         <Stack sx={{ width: "100%" }} spacing={2}>
//           <h1>Profile</h1>

//           <Grid container spacing={0}>
//             <Grid style={{ position: "absolute", left: "60%" }} item xs={2}>
//               <TextField
//                 style={{ width: "300px" }}
//                 type="password"
//                 className="input"
//                 name="passwordConfirm"
//                 value={user.passwordConfirm}
//                 onChange={handleChange}
//                 id="outlined-search"
//                 label="passwordConfirm"
//               />
//             </Grid>
//             <Grid style={{ position: "relative", left: "5%" }} item xs={2}>
//               <TextField
//                 style={{ width: "300px" }}
//                 type="password"
//                 className="input"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//                 id="outlined-search"
//                 label="Password"
//               />
//             </Grid>
//           </Grid>

//           <Button
//             className="input"
//             type="submit"
//             // disabled={
//             // USER_REGEX.test(errors.email) === false ||
//             // PWD_REGEX.test(er) === false ||
//             // passwordValue !== passwordConfirmValue
//             // }
//             variant="outlined"
//           >
//             {" "}
//             Save{" "}
//           </Button>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default ChangePass;

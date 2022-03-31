// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import { styled, alpha } from "@mui/material/styles";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import NestedBar from "./Nestedbar";

// import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// // import Avatar from "@mui/material/Avatar";
// // import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import Button from "@mui/material/Button";
// import MailIcon from "@mui/icons-material/Mail";
// // import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import { Link, useNavigate } from "react-router-dom";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { useContext } from "react";
// import TextField from "@mui/material/TextField";
// import { ProductsContext } from "../context/productContext";

// const pages = ["clothes", "electronics", "gaming", "learning", "metal", "food"];

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const navigate = useNavigate();

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const { cartItems } = useContext(ProductsContext);

//   return (
//     <>
//       <AppBar position="static" sx={{ backgroundColor: "#000000c2" }}>
//         <Container>
//           <Toolbar disableGutters>
//             <Typography variant="h6" noWrap component="div" sx={{ mr: 2,
//                 display: { xs: "none", md: "flex" }, cursor: "pointer" }}
//                 onClick={() => navigate(`/ `, { replace: false })}
//               >LOGO</Typography>

//             <Box sx={{ display: { xs: "none", md: "flex" } }}>
//               <Link to="/products" style={{ textDecoration: "none", color: "white", fontSize: 20 }}
//               >Products</Link>
//             </Box>

//             <Box sx={{ display: { xs: "none", md: "flex" } }}>
//               <Link to="/filter"   style={{ textDecoration: "none", color: "white", fontSize: 20, marginLeft: '10px' }}
//               >Filter Page</Link>
//             </Box>
            
//             <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
//               <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                 <Badge color="error"> 
//                   <AssignmentIndIcon />
//                 </Badge>
//               </IconButton>
//             </Link>

//             <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
//               <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                 <Badge badgeContent={cartItems.length} color="error">
//                   <ShoppingCartIcon style={{margin:'0 20px'}} />
//                 </Badge>
//               </IconButton>
//             </Link>

//             <Box sx={{ flexGrow: 1}}>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <AccountCircleIcon fontSize="large" style={{color: '#fff'}} />
//                 </IconButton>
//               </Tooltip>

//               <Menu sx={{ mt: "45px" }} id="menu-appbar" anchorEl={anchorElUser}
//                 anchorOrigin={{ vertical: "top", horizontal: "right", }} keepMounted
//                 transformOrigin={{ vertical: "top", horizontal: "right",}}
//                 open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>

//                 <MenuItem style={{display:'block', textAlign: 'center'}}
//                   onClick={()=> { navigate("/profile", { replace: false });handleCloseNavMenu() }}>
//                   <Typography textAlign="center">Profile</Typography>
//                 </MenuItem>

//                 <MenuItem 
//                   onClick={() => {navigate("/login", { replace: true });
//                     localStorage.setItem("response", "");
//                     localStorage.setItem("token", "");
//                     handleCloseNavMenu();}}>
//                   <Typography textAlign="center">Signout</Typography>
//                 </MenuItem>
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>

//       {/*Secnd bar */}
//       <NestedBar />
//     </>
//   );
// };
// export default ResponsiveAppBar;

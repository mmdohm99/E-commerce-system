import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import UploadButtons from './ButtonMui.js'
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { ProductsContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Basket = () => {
  const checkToken = localStorage.getItem('token')
  const { addToCart, decFromCart, cartItems } = useContext(ProductsContext);
  const navigate = useNavigate();
  console.log(cartItems);
  const handleClick = () => {
    localStorage.setItem("Cart", JSON.stringify(cartItems));
    if(checkToken){
        navigate(`/cart/shipping`, { replace: true })
    }else{
      navigate(`/login `, { replace: true })
    }

  };

  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: 700, marginTop: 1}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{backgroundColor:'#333'}}>Product</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#333'}} align="right">Category</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#333'}} align="right">Quantity</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#333'}} align="right">Total Price</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#333'}} align="right">Increase</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#333'}} align="right">Decrease</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#333'}} align="right">Product Info</StyledTableCell>
            <StyledTableCell style={{backgroundColor:'#333'}} align="right">send request</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.length < 1 ? (
            <StyledTableRow
              style={{
                fontSize: "75px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            ></StyledTableRow>
          ) : (
            cartItems.map((item) => (
              <StyledTableRow key={uuid()}>
                <StyledTableCell component="th" scope="row">
                  {item.name}
                </StyledTableCell>

                <StyledTableCell key={uuid()} align="right">
                  {item.description}
                </StyledTableCell>

                <StyledTableCell key={uuid()} align="right">
                  {item.qty}
                </StyledTableCell>

                <StyledTableCell key={uuid()} align="right">
                  {item.qty} x {item.listPrice}$={item.qty * item.listPrice}
                </StyledTableCell>

                <StyledTableCell key={uuid()} align="right">
                  <Button variant="contained" onClick={() => addToCart(item)} style={{backgroundColor:'#444'}}>
                    <AddCircleIcon />
                  </Button>
                </StyledTableCell>

                <StyledTableCell key={uuid()} align="right">
                  <Button variant="contained" onClick={() => decFromCart(item)} style={{backgroundColor:'#444'}}>
                    <RemoveCircleIcon />
                  </Button>
                </StyledTableCell>

                <StyledTableCell key={uuid()} align="right">
                  <Button
                    variant="contained"
                    onClick={() =>
                      navigate(`/product/${item._id}`, { replace: false })
                    }
                    style={{backgroundColor:'#444'}}
                  >
                    <ArrowCircleRightIcon  />
                  </Button>
                </StyledTableCell>

                <StyledTableCell key={uuid()} align="right">
                  <Button variant="contained" onClick={handleClick} style={{backgroundColor:'#444'}}>
                    <RemoveCircleIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Basket;

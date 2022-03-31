import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../styles/card.css";
import { ShoppingBasket } from "@mui/icons-material";
import { useContext } from "react";
import { ProductsContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";

// import { v4 as uuid } from "uuid";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
}));

export function RecipeReviewCard(props) {
  const { addToCart } = useContext(ProductsContext);

  const [expanded, setExpanded] = React.useState(false);

  const { product } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{
          minWidth: "350px",
          marginTop: 1,
          marginLeft: 1,
          backgroundColor: "#e7e7e7",
        }}
      >
        <CardMedia
          width={100}
          onClick={() =>
            navigate(`/product/${product._id}`, { replace: false })
          }
          component="img"
          height="194"
          image={product.photo}
          alt="Paella dish"
        />

        <CardHeader title={product.name} />

        <CardContent>
          {/* <Typography variant="body2" color="text.secondary">
            {product.ratingsAverage}
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
            description: {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            price: {product.listPrice}$
          </Typography>
          <Typography variant="body2" color="text.secondary">
            instock : {product.stock}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Rating
              name="half-rating-read"
              defaultValue={product.ratingsAverage}
              precision={0.5}
              readOnly
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ships to your country
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShoppingBasket onClick={() => addToCart(product)} />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}

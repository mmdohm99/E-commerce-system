import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../context/productContext";
import { useNavigate, Link } from "react-router-dom";
// import Rating from "../components/Rating";

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  FormControl,
} from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";

export const ProductDetail = () => {
  // const { addToCart } = useContext(ProductsContext);
  const { id } = useParams();
  const { products, addToCart } = useContext(ProductsContext);
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  //   const product = products.find((item) => item.id === id);
  let [product, setProduct] = useState({});
  //   console.log(products);
  useEffect(() => {
    setProduct(() => {
      let product = products.find((item) => item._id === id);

      return product ? product : {};
    });
  }, [id, products]);
  return (
    <>
      <Row className="btn btn-light my-3"></Row>
      <Row>
        <Col md={4}>
          <ReactImageMagnify
            style={{
              zIndex: 100,
              border: "2px white solid",
              borderRadius: "10px",
            }}
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: `${product.photo}`,
              },
              largeImage: {
                src: `${product.photo}`,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </Col>
        <Col style={{ width: "350px" }}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            {/*  <ListGroup.Item>
              <Rating
                value={product.ratingsAverage}
                text={`${product.ratingsQuantitiy} reviews`}
              />
          </ListGroup.Item>*/}
            <ListGroupItem>Price: ${product.listPrice}</ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{`${product.listPrice}`}$</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.stock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                </Row>
              </ListGroupItem>

              {product.stock > 0 && (
                <ListGroupItem>
                  <Row>
                    <Col>Quantity:</Col>
                    <Col>
                      <FormControl
                        as="select"
                        value={qty}
                        onChange={(e) => {
                          setQty(e.target.value);
                          // console.log(qty);
                        }}
                      >
                        {[...Array(product.stock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </FormControl>
                    </Col>
                  </Row>
                </ListGroupItem>
              )}

              <ListGroupItem>
                <Button
                  onClick={() => addToCart(product, qty)}
                  className="btn-block"
                  type="button"
                  disabled={product.stock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

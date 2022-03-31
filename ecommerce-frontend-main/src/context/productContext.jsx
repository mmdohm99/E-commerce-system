import {
  useState,
  useEffect,
  createContext,
  useMemo,
  useCallback,
  // useCallback
} from "react";
import { Pagination } from "../pages/Products";
// import { Route, Routes } from "react-router-dom";
// import { Home } from "../pages/home.jsx";
// import Cart from "../components/Cart.jsx";
import axios from "axios";
export const ProductsContext = createContext();

export const ProductsModule = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  //   console.log("i enjdr");

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/api/v1/products").then((res) => {
      setProducts(res.data.data.data);
      setLoading(false);
    });
  }, []);
  console.log(products);
  // Cart section
  const [cartItems, setCartItems] = useState([]);

  // Add To Cart
  const addToCart = useCallback(
    (product, qty) => {
      const exist = cartItems.find((item) => item._id === product._id);
      console.log(qty);
      if (exist) {
        setCartItems(cartItems.map((item) =>
            item._id === product._id? {
                  ...exist, qty:
                    exist.qty === exist.stock? exist.qty: 
                    qty? qty * 1 + exist.qty * 1: exist.qty * 1 + 1,
                }: item
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: qty ? qty * 1 : 1 }]);
      }
      
    },
    [cartItems]
  );

  // Decrease From Cart
  const decFromCart = useCallback(
    (product) => {
      const exist = cartItems.find((item) => item._id === product._id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((item) => item._id !== product._id));
      } else {
        setCartItems(
          cartItems.map((item) =>
            item._id === product._id ? { ...exist, qty: exist.qty - 1 } : item
          )
        );
      }
    },
    [cartItems]
  );
  //////////////////////////////////// Pagenation////////////////////////////////////////////

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  ///////////////////////////////////////////////////////////////////////////////////////////
  const contextValue = useMemo(
    () => ({
      setCartItems,
      paginate,
      pageNumbers,
      products,
      addToCart,
      decFromCart,
      cartItems,
      loading,
      currentProducts,
      currentPage,
      // postsPerPage,
    }),
    [setCartItems,
      paginate,
      pageNumbers,
      products,
      currentProducts,
      addToCart,
      decFromCart,
      cartItems,
      loading,
      currentPage,
      // postsPerPage,
    ]
  );

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

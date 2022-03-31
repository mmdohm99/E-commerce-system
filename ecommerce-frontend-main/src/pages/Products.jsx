/* eslint-disable react/jsx-no-comment-textnodes */
import { useContext } from "react";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { ProductsContext } from "../context/productContext";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { RecipeReviewCard } from "../components/Card";
import { v4 as uuid } from "uuid";
import "../styles/home.css";

export function Products() {
  const { currentProducts, pageNumbers, paginate, currentPage } =
    useContext(ProductsContext);
  console.log(pageNumbers);
  return (
    // {console.log(products)}
    <>
      <div className="Container">
        {currentProducts.map((product) => (
          <RecipeReviewCard product={product} key={product.id} />
        ))}
      </div>
      <nav
        style={{
          position: "relative",
          left: "45%",
          marginTop: "10px",
        }}
      >
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={uuid()} className="page-item">
              <a
                style={{
                  border: "1px solid grey ",
                  borderRadius: "5px",
                  margin: "3px",
                  cursor: "pointer",
                }}
                onClick={() => paginate(number)}
                className={`page-link ${
                  number === currentPage ? "activeNumber" : ""
                }`}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
// import ProductCardPage from "../../pages/ProductCardPage";
import { useProducts } from "../../context/ProductContextProvider";
import PaginationAllCard from "../../pages/Pagination";
// import Pagination from "../../pages/Pagination";

const ProductList = () => {
  // !PAGINATION
  const { products, getProducts } = useProducts();
  console.log(products);
  const [page, setPage] = useState(1);
  const itemPerPage = 3;
  const count = Math.ceil(products.length / itemPerPage);
  console.log(count);
  const currentData = () => {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return products.slice(begin, end);
  };
  const handleChange = (e, value) => {
    setPage(value);
    console.log(value);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(currentData());
  return (
    <>
      <div>
        asdfads
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {currentData().map((elem) => (
            <ProductCard key={elem.id} elem={elem} />
          ))}
        </Box>
        <PaginationAllCard
          count={count}
          page={page}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default ProductList;

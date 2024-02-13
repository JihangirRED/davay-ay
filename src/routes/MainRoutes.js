import React from "react";

import { Route, Routes } from "react-router-dom";
import ProductCardPage from "../pages/ProductCardPage";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage from "../pages/EditProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductContextProvider from "../context/ProductContextProvider";

const MainRoutes = () => {
  return (
    <div>
      <ProductContextProvider>
        <Routes>
          <Route path="/" element={<ProductCardPage />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/details/:id" element={<ProductDetailsPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>
      </ProductContextProvider>
    </div>
  );
};

export default MainRoutes;

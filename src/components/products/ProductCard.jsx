import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";
import PaginationAllCard from "../../pages/Pagination";

const ProductCard = ({ elem }) => {
  console.log(elem);
  const { getProducts, products, deleteProduct } = useProducts();
  console.log(products); //лежит наша data в []
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      <div className="card">
        <img className="img-cart" src={elem.image} alt="" />
        <div className="text">
          <h5 className="name">{elem.name}</h5>
          <p className="description">{elem.description}</p>
          <p className="price">{elem.price}$</p>
          <div className="button">
            <button onClick={() => deleteProduct(elem.id)} className="btn add">
              DELETE
            </button>
            <Link to={`edit/${elem.id}`}>
              <button className="btn edit">EDIT</button>
            </Link>
            <Link to={`details/${elem.id}`}>
              <button className="btn details">DETAILS</button>
            </Link>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default ProductCard;
//!pContext -это context который принимает значение
//!getProducts(); вызываем useEffect
//!создаем карточку
//!с помощю products мы распологаем data в map и передаем

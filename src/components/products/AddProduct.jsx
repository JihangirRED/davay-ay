import React, { useContext, useState } from "react";
import { pContext } from "../../context/ProductContextProvider";

const AddProduct = () => {
  //здесь мы получаем наш addProduct с помощю хука useContext,addProduct - это функция которое внутри себя принимает наш API newProduct productContext-это наш созданный контекст
  //!1
  const { addProduct } = useContext(pContext);
  //!3
  const initProduct = {
    name: "",
    description: "",
    price: "",
    image: "",
    type: "",
  };

  const [product, setProduct] = useState(initProduct);

  //!5
  function handleAddProduct(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }

  //!6
  function saveProduct() {
    addProduct(product);
    setProduct(initProduct);
  }

  return (
    // !2 !4
    <div>
      <h1>add product</h1>
      <div
        style={{
          display: "flex",
          width: "600px",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleAddProduct}
          placeholder="name"
        />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleAddProduct}
          placeholder="description"
        />
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleAddProduct}
          placeholder="price"
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleAddProduct}
          placeholder="image"
        />
        <input
          type="text"
          name="type"
          value={product.type}
          onChange={handleAddProduct}
          placeholder="type"
        />

        <button onClick={saveProduct}>ADD PRODUCT</button>
      </div>
    </div>
  );
};

export default AddProduct;
//!-этап добовление продукта в db.json
// 1.сначало инпортируем addProduct
// 2.создаем наши инпуты
// 3.создаем состояние
// 4.добовляем в инпут value чтобы записался при вводе в инпут новое значение в копию ...product.name нужен для типа.вызываем функцию handleAddProduct
// 5.создаем функцию handleAddProduct которое отлавливает ивент (е) и value записался в наш копию ...product а он разворачивает наши значение и передает в obj
// 6.создаем button и делаем при клике вызывался saveProduct а в saveProduct мы передаем в  addProduct(product); и очищаем после добовление наши инпуты setProduct(initProduct);
//!

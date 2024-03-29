import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/const";

//создаем контекст
export const pContext = createContext();
export const useProducts = () => useContext(pContext);
//создаем первоначальный состояние
const INIT_STATE = { products: [], oneProduct: null };

//создаем reduсer а редюсер в себе принимает state и action внутри создаем -switch case ,action перебирает наши case

//! 1cоздаем компонент
const ProductContextProvider = ({ children }) => {
  const reduсer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
      default:
        return state;
    }
  };
  //! 1здесь мы создаем хук useReducer он принимает в себе reduсer, INIT_STATE-состояние,а reduсer это функция.dispatch он для будушего кнопки которой нужен для узнование type
  const [state, dispatch] = useReducer(reduсer, INIT_STATE);
  //! 1здесь из данных newProduct передаем в нашу API
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };
  //!2
  const getProducts = async () => {
    let { data } = await axios(API);
    let action = {
      type: "GET_PRODUCTS",
      payload: data,
    };
    dispatch(action);
  };
  //!DETAILS
  // передаем API c id
  const getOnProduct = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    let action = {
      type: "GET_ONE_PRODUCT",
      payload: data,
    };
    dispatch(action);
  };

  //!DELETE #3
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts(); // нужен чтоб он стянул наши обновленные данные
  };
  //!EDIT #4
  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${API}/${newProduct.id}`, newProduct);
    getProducts(); // Получаем обновленный список продуктов после редактирования
  };
  //!1 здесь мы экспортируем наши функции в children,addProduct мы отправляем в addProduct.jsx
  const values = {
    addProduct,
    getProducts,
    getOnProduct,
    products: state.products,
    oneProduct: state.oneProduct,
    deleteProduct,
    saveEditedProduct,
  };

  return (
    <>
      <pContext.Provider value={values}>{children}</pContext.Provider>
    </>
  );
};
//експортируем наш компонент
export default ProductContextProvider;
//!1 ProductContextProvider это постовщик контекста
//!2 создание details oneProducts getOnProduct и передаем в values идем в ProductDetails.jsx getProducts лежит data в []. getOnProduct лежит в null

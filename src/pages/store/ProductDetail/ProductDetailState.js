import axios from "axios";
import React, { useEffect, useState } from "react";
import {ProductDetailContext} from '../Context'

export default function ProductDetailState({ children }) {
  const [ProductDetail, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://web-thu-cung.herokuapp.com/information/infor`)
      .then((datas) => setProduct(datas.data));
  }, []);

  return (
    <>
      <ProductDetailContext.Provider
        value={{
          ProductDetail: ProductDetail,
        }}
      >
        {children}
      </ProductDetailContext.Provider>
    </>
  );
}

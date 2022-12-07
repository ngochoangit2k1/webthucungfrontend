import axios from "axios";
import React, { useEffect, useState } from "react";
import {ProductDetailContext} from '../Context'
import  {Links} from "../../l";
export default function ProductDetailState({ children }) {
  const [ProductDetail, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${Links.links}information/infor`)
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

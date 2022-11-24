import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import NewestWrite from "./NewestWrite";
import Product from "./Product";

const SingleProductPage = () => {
  return (
    <div>
      <NavBar />
      <Product />
      <NewestWrite />
      <Footer />
    </div>
  );
};

export default SingleProductPage;

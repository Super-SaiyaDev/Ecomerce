import React from "react";
import ProductsNav from "./nav-products/products-nav";
import HeaderProducts from "./header/header-products";

const Products = () => {
  return (
    <>
      <nav>
        <ProductsNav></ProductsNav>
      </nav>
      <main>
        <HeaderProducts />
      </main>
    </>
  );
};

export default Products;

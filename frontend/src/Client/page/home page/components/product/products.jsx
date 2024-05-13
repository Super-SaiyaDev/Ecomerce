import React from "react";
import CategoryProducts from "./header/header-products";
import "./css/products.css";

const Products = () => {
  return (
    <>
      {/* <div style={{"backgroundColor":" #262d32" , "padding": "12px"}}>
        <ProductsNav></ProductsNav>
      </div> */}
      <div className="container-category-product">
        <div className="product-feild">
          <div className="title">
            <h1 className="title-category">Casas</h1>
          </div>
          <CategoryProducts />
        </div>
        <div className="product-feild">
          <div className="title">
            <h1 className="title-category">Ofertas</h1>
          </div>
          <CategoryProducts />
        </div>
      </div>
    </>
  );
};

export default Products;

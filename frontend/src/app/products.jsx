import React from "react";
import CategoryProducts from "../components/components/product/header/components/card-products";
import ProductsNavbar from "../components/components/product/nav-products/products-nav";
import "../css/products.css";

const Products = () => {
  return (
    <>
      <div style={{"backgroundColor":" #262d32" , "padding": "12px"}}>
        <ProductsNavbar></ProductsNavbar>
      </div>

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

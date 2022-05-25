import React from "react";
import ProductPageHeader from "../../components/header/ProductPageHeader";
import AllProducts from "../../components/products/AllProducts";

function Products() {
  return (
    <>
      <ProductPageHeader />
      <div className="mt-4">
        <AllProducts />
      </div>
    </>
  );
}

export default Products;

import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, remove }) => {
  return (
    <div className="flex flex-wrap">
      {products?.map((product) => (
        <ProductItem
          key={product._id}
          desc={product.description}
          price={product.price}
          title={product.title}
          urls={product.urls}
          id={product._id}
          remove={remove}
          amount={product.amount}
        />
      ))}
    </div>
  );
};

export default ProductList;

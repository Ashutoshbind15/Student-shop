import React from "react";

import Card from "../Layout/Card";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Card key={product._id}>
          {product.title}
          {product.price}
        </Card>
      ))}
    </div>
  );
};

export default ProductList;

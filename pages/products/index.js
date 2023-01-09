import React from "react";
import ProductList from "../../components/Product/ProductList";
import Product from "../../models/Product";
import connectDB from "../../utils/db";

const ProductPage = ({ products }) => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;

export const getStaticProps = async () => {
  await connectDB();

  const products = await Product.find({});

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};

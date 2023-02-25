import React from "react";
import ProductList from "../../components/Product/ProductList";
import ProviderC from "../../components/Provider/Provider";
import ProviderEl from "../../components/Provider/ProviderPage";
import Product from "../../models/Product";
import Provider from "../../models/provider";
import connectDB from "../../utils/db";

const ProviderPage = ({ provider }) => {
  console.log(provider);

  return (
    <div className="font-serif mt-6">
      <ProviderEl
        name={provider.name}
        location={provider.location}
        key={provider._id}
        type={provider.type}
      />

      <ProductList products={provider.products} />
    </div>
  );
};

export default ProviderPage;

export const getStaticProps = async (ctx) => {
  connectDB();
  const { id } = ctx.params;
  const provider = await Provider.findById(id).populate("products");

  return {
    props: { provider: JSON.parse(JSON.stringify(provider)) },
    revalidate: 100,
  };
};
export const getStaticPaths = async () => {
  connectDB();
  const providers = await Provider.find({});
  const ids = providers.map((el) => ({
    params: { id: JSON.parse(JSON.stringify(el._id)) },
  }));

  return {
    paths: ids,
    fallback: false,
  };
};

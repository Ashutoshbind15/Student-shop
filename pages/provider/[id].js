import React from "react";
import ProductList from "../../components/Product/ProductList";
import ProviderEl from "../../components/Provider/ProviderPage";
import Provider from "../../models/provider";
import connectDB from "../../utils/db";

const ProviderPage = ({ provider }) => {
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

export const getServerSideProps = async (ctx) => {
  await connectDB();
  const { id } = ctx.params;
  const provider = await Provider.findById(id).populate("products");

  return {
    props: { provider: JSON.parse(JSON.stringify(provider)) },
  };
};

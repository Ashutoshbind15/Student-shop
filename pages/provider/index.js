import React from "react";
import ProviderC from "../../components/Provider/Provider";
import Provider from "../../models/provider";
import connectDB from "../../utils/db";

const Providers = ({ providers }) => {
  return (
    <div>
      Providers
      <div className="flex flex-wrap">
        {providers.map((el) => (
          <ProviderC
            key={el._id}
            name={el.name}
            location={el.location}
            type={el.type}
            id={el._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Providers;

export async function getStaticProps() {
  await connectDB();

  const providers = await Provider.find({});

  return {
    props: {
      providers: JSON.parse(JSON.stringify(providers)),
    },
  };
}

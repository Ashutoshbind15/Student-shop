import Image from "next/image";
import React from "react";
import Card from "../Layout/Card";

const ProviderC = ({ name, type, location, urls }) => {
  return (
    <>
      <Card className="flex flex-col mx-2 my-2">
        <div className="flex flex-col">
          <Image src="/images/a1.jpg" alt="avatar" width={300} height={300} />
        </div>
        <div>Name: {name}</div>
        <div>Type: {type}</div>
        <div>Located: {location}</div>
      </Card>
    </>
  );
};

export default ProviderC;

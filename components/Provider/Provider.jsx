import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../Layout/Card";
import Button from "../UI/Button";

const ProviderC = ({ name, type, location, urls, id, visit = false }) => {
  return (
    <div className="">
      <Card className="flex flex-col mx-2 my-2">
        <div className="flex flex-col">
          <Image src="/images/a1.jpg" alt="avatar" width={300} height={300} />
        </div>
        <div>Name: {name}</div>
        <div>Type: {type}</div>
        <div>Located: {location}</div>
        <Button>
          <Link href={`/provider/${id}`}>Visit</Link>
        </Button>
      </Card>
    </div>
  );
};

export default ProviderC;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../UI/Button";

const ProviderEl = ({ name, type, location, urls, id, visit = false }) => {
  return (
    <div className="flex items-center justify-start px-20">
      <div className="flex flex-col w-2/5">
        <div className="font-semibold my-2 text-center text-xl uppercase">
          {name}
        </div>
        <div className="relative h-96 justify-start">
          <Image src="/images/a1.jpg" alt="avatar" fill={true} />
        </div>
      </div>
      <div className="w-3/5 h-full text-center">
        <div className="font-semibold my-2 text-lg">Type: {type}</div>
        <div className="font-semibold my-2 text-lg">Located: {location}</div>
      </div>
      {visit ? (
        <Button className="bg-pink-700 text-white">
          <Link href={`/provider/${id}`}>Visit</Link>
        </Button>
      ) : null}
    </div>
  );
};

export default ProviderEl;

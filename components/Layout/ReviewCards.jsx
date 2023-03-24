import Image from "next/image";
import React from "react";

const ReviewCards = ({ auth = "unknown" }) => {
  return (
    <div className="w-full flex py-12 px-4 items-center justify-between t2">
      <div className="w-1/2 ml-6 font-bold text-xl font-mono">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, dicta
          necessitatibus, quam obcaecati animi ratione neque, sint aut inventore
          fugiat vel commodi rem architecto labore tempore earum libero
          voluptatum porro.
        </p>

        <p className="mt-4"> - {auth}</p>
      </div>

      <div className="flex-1 flex items-center justify-center rounded-lg">
        <Image
          src="/images/a1.jpg"
          width={400}
          height={100}
          alt={"rcard"}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ReviewCards;

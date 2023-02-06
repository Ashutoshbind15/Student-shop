import Image from "next/image";
import React from "react";

const ReviewCards = () => {
  return (
    <div className="w-full flex py-12 px-4 items-center justify-between t2">
      <div className="w-1/2 ml-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, dicta
        necessitatibus, quam obcaecati animi ratione neque, sint aut inventore
        fugiat vel commodi rem architecto labore tempore earum libero voluptatum
        porro.
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Image src="/images/a1.jpg" width={400} height={100} />
      </div>
    </div>
  );
};

export default ReviewCards;

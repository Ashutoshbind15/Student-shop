import Image from "next/image";
import React from "react";
import Card from "../Layout/Card";
import Button from "../UI/Button";

const StudentCard = () => {
  return (
    <Card>
      <div className="flex flex-col px-4 py-4 justify-around items-center text-white">
        <div className="flex">
          <div className="font-semibold mb-4 text-black">Shop Name</div>
        </div>
        <div>
          <Image
            src="/images/a1.jpg"
            alt="avatar"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className="text-black my-2">
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          doloremque? Totam labore error debitis nemo fugit ea blanditiis
          architecto fuga. Ipsa laboriosam sint in expedita rem perspiciatis
          iusto maxime tenetur?`
            .trim()
            .substring(0, 50)}
        </div>
        <div className="mt-4">
          <Button className="bg-blue-600 px-6 py-2 rounded-3xl">
            Shop now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default StudentCard;

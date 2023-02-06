import React from "react";
import Button from "../UI/Button";
import CardNavHeader from "../UI/CardNavHeader";
import Card from "./Card";

const TypeCards = ({ title, desc, className }) => {
  return (
    <Card className={`text-center py-16 mx-4 ${className}`}>
      {/* <CardNavHeader /> */}
      <p className="font-semibold text-lg mb-4">{title}</p>
      <p className="mb-4">{desc}</p>
      <Button className="my-4 mx-2">Shop Now!</Button>
    </Card>
  );
};

export default TypeCards;

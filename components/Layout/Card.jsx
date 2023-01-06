import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`px-6 py-3 shadow-lg rounded-md ${className} hover:scale-105 transition-all`}
    >
      {children}
    </div>
  );
};

export default Card;

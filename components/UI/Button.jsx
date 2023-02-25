import React from "react";

const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      className={`${className} px-6 py-2 rounded-lg font-bold font-serif`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

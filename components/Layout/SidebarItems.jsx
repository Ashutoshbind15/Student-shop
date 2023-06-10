import React from "react";

const SidebarItems = ({ title, selected, onClick }) => {
  return (
    <div
      className={`border-0 border-solid border-blue-700 w-full text-center transition-colors rounded-lg shadow shadow-blue-700 hover:border-b-2 py-2 cursor-pointer mb-4 ${
        title === selected ? "bg-blue-700 text-white" : null
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default SidebarItems;

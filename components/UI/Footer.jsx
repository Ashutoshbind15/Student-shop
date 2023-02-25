import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white flex items-center justify-around w-full">
      <div className="w-1/4 flex flex-col items-center py-4 px-4">
        <div>Logo for the app</div>
        <div className="flex flex-col py-4">
          <div>Link 1</div>
          <div>Link 2</div>
          <div>Link 3</div>
        </div>
      </div>
      <div className="w-3/4 flex items-center pl-12">
        <div className="w-1/3">
          <div>Links for students</div>

          <div className="flex flex-col py-4">
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
          </div>
        </div>
        <div className="w-1/3">
          <div>Links for students</div>

          <div className="flex flex-col py-4">
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
          </div>
        </div>
        <div className="w-1/3">
          <div>Links for students</div>

          <div className="flex flex-col py-4">
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

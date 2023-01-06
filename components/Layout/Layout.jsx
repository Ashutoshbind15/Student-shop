import React from "react";
import Navbar from "../UI/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

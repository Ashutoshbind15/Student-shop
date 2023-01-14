import React from "react";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-700 text-white font-semibold flex items-center justify-between px-4 py-4 ">
      <div>
        <Link href="/">Student_Shop_App</Link>
      </div>
      <div className="flex items-center justify-around px-4">
        <div className="mr-2">
          <Link href="/auth/profile">Account</Link>
        </div>
        <div>
          <Link href="/auth">Auth</Link>
        </div>
        <div className="ml-2">
          <Link href="/provider">Providers</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

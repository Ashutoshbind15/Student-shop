import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useUser } from "../../hooks/queries";

const Navbar = () => {
  const { data: session } = useSession();
  const { profile } = useUser();

  return (
    <div className="bg-blue-700 text-white font-semibold flex items-center justify-between px-4 py-4 ">
      <div>
        <Link href="/">Student_Shop_App</Link>
      </div>
      <div className="flex items-center justify-around px-4 hover:cursor-pointer">
        {session ? (
          <div className="mr-2" onClick={() => signOut()}>
            Logout
          </div>
        ) : (
          <div className="mr-2">
            <Link href="/auth">SignIn</Link>
          </div>
        )}
        {profile && (
          <div>
            <Link href="/auth/profile">{profile?.name}</Link>
          </div>
        )}
        <div className="ml-2">
          <Link href="/provider">Providers</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { unstable_getServerSession } from "next-auth";
import React from "react";
import SideBar from "../components/Layout/SideBar";
import Student from "../models/Student";
import { authOptions } from "./api/auth/[...nextauth]";

const Dashboard = ({ role }) => {
  if (role === "admin") {
    return (
      <div className="flex">
        <div className="w-1/5">
          <SideBar role={"admin"} />
        </div>
        <div className="flex flex-col justify-start w-4/5"></div>
      </div>
    );
  } else if (role === "retailer") {
    return (
      <div className="flex">
        <div className="w-1/5">
          <SideBar role={"retailer"} />
        </div>
        <div className="flex flex-col justify-start w-4/5"></div>
      </div>
    );
  } else {
    return <p>Not authorized</p>;
  }
};

export default Dashboard;

export const getServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session && session.user.id) {
    const user = await Student.findById(session.user.id).select("role");
    console.log(user);

    if (user.role === "admin" || user.role === "retailer") {
      return {
        props: {
          role: user.role,
        },
      };
    } else {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
  } else {
    return {
      redirect: {
        destination: "/auth",
      },
    };
  }
};

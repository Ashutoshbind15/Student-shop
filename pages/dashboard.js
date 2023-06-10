import { unstable_getServerSession } from "next-auth";
import React, { useState } from "react";
import SideBar from "../components/Layout/SideBar";
import StudentList from "../components/Student/StudentList";
import Student from "../models/Student";
import { authOptions } from "./api/auth/[...nextauth]";

const Dashboard = ({ role, students }) => {
  const [selected, setSelected] = useState("Products");

  if (role === "admin") {
    return (
      <div className="flex">
        <div className="w-1/5">
          <SideBar
            role={"admin"}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
        {selected === "Products" && (
          <div className="flex flex-col justify-start w-4/5 p-8">
            <h1 className="my-5 text-2xl font-mono">Products</h1>
          </div>
        )}
        {selected === "Retailers" && (
          <div className="flex flex-col justify-start w-4/5 p-8">
            <h1 className="my-5 text-2xl font-mono">Retailers</h1>
          </div>
        )}
        {selected === "Orders" && (
          <div className="flex flex-col justify-start w-4/5 p-8">
            <h1 className="my-5 text-2xl font-mono">Orders</h1>
          </div>
        )}
        {selected === "Students" && (
          <div className="flex flex-col justify-start w-4/5 p-8">
            <StudentList students={students} />
          </div>
        )}
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
      const students = await Student.find({}).select("-password");

      return {
        props: {
          role: user.role,
          students: JSON.parse(JSON.stringify(students)),
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

import { unstable_getServerSession } from "next-auth";
import React from "react";
import Student from "../../models/Student";
import connectDB from "../../utils/db";
import { authOptions } from "../api/auth/[...nextauth]";

const ProfilePage = ({ student }) => {
  return <div>{JSON.stringify(student)}</div>;
};

export default ProfilePage;

export const getServerSideProps = async ({ req, res }) => {
  const sess = await unstable_getServerSession(req, res, authOptions);

  if (!sess) {
    return {
      redirect: {
        destination: "/auth",
      },
    };
  } else {
    connectDB();
    const student = await Student.findOne({ _id: sess.user.id }).select(
      "-password -role"
    );

    return {
      props: {
        student: JSON.parse(JSON.stringify(student)),
      },
    };
  }
};

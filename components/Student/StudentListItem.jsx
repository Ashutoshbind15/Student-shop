import React from "react";
import Button from "../UI/Button";

const StudentListItem = ({
  name,
  id,
  contact,
  email,
  location,
  urls,
  role,
}) => {
  console.log(role);
  return (
    <div className="shadow-lg flex flex-col rounded-lg px-2 py-4 m-2 transition-transform hover:scale-105">
      <div>{name}</div>
      <div>{contact}</div>
      <div>{email}</div>
      <div>{location}</div>
      <div>role : {role}</div>

      <Button></Button>
    </div>
  );
};

export default StudentListItem;

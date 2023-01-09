import React from "react";

const StudentList = ({ name, contact, email, urls, locations }) => {
  return (
    <div>
      {name}
      {contact}
    </div>
  );
};

export default StudentList;

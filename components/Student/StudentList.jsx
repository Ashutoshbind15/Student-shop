import React from "react";
import StudentListItem from "./StudentListItem";

const StudentList = ({ students }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <h1 className="my-5 text-2xl font-mono">Student List</h1>
      <div className="flex flex-wrap items-center">
        {students.map((student) => {
          return (
            <StudentListItem
              key={student._id}
              name={student.name}
              contact={student.contact}
              email={student.email}
              location={student.location}
              urls={student.urls}
              role={student.role}
              id={student._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;

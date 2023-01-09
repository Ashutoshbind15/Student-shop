import React from "react";
import Card from "../../components/Layout/Card";
import StudentList from "../../components/Student/Student";
import Student from "../../models/Student";
import connectDB from "../../utils/db";

const StudentPage = ({ students }) => {
  return (
    <div>
      StudentPage
      <Card>
        {students.map((el) => (
          <StudentList
            name={el.name}
            key={el._id}
            contact={el.contact}
            email={el.email}
            locations={el.location}
          />
        ))}
      </Card>
    </div>
  );
};

export default StudentPage;

export async function getStaticProps() {
  await connectDB();

  const students = await Student.find({});

  return {
    props: {
      students: JSON.parse(JSON.stringify(students)),
    },
  };
}

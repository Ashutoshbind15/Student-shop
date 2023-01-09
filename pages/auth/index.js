import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import Button from "../../components/UI/Button";

const AuthPage = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", location: "", email: "", contact: 0 }}
        onSubmit={async (values) => {
          await axios.post("/api/student", values);
        }}
      >
        <Form className="flex flex-col items-start">
          <label htmlFor="">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="">Location</label>
          <Field type="text" name="location" />
          <ErrorMessage name="location" component="div" />

          <label htmlFor="">Email</label>
          <Field type="text" name="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="">Contact</label>
          <Field type="number" name="contact" />
          <ErrorMessage name="contact" component="div" />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default AuthPage;

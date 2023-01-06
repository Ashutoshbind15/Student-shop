import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import Button from "../../components/UI/Button";

const ProviderPage = () => {
  return (
    <>
      ProviderPage
      <Formik
        initialValues={{ name: "", type: "", location: "" }}
        onSubmit={async (values) => {
          await axios.post("/api/provider", values);
        }}
      >
        <Form className="flex flex-col items-start">
          <label htmlFor="">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <label htmlFor="">Type</label>
          <Field type="text" name="type" />
          <ErrorMessage name="name" component="div" />
          <label htmlFor="">Location</label>
          <Field type="text" name="location" />
          <ErrorMessage name="name" component="div" />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </>
  );
};

export default ProviderPage;

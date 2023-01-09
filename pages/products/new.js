import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import Button from "../../components/UI/Button";

const ProductForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ title: "", price: "", description: "" }}
        onSubmit={async (values) => {
          await axios.post("/api/product", values);
        }}
      >
        <Form className="flex flex-col items-start">
          <label htmlFor="">Name</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" />
          <label htmlFor="">Desc</label>
          <Field type="text" name="description" />
          <ErrorMessage name="description" component="div" />
          <label htmlFor="">Price</label>
          <Field type="number" name="price" />
          <ErrorMessage name="price" component="div" />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductForm;

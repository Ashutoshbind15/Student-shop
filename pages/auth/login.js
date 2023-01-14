import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession, signIn } from "next-auth/react";
import React from "react";
import Button from "../../components/UI/Button";

const LoginPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            signIn("credentials", {
              email: values.email,
              password: values.password,
            });
          }}
        >
          <Form className="flex flex-col items-start">
            <label htmlFor="">Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />

            <Button type="submit">Submit</Button>
          </Form>
        </Formik>
      </div>
    );
  } else {
    return (
      <>
        <h1>Welcome</h1>;
      </>
    );
  }
};

export default LoginPage;

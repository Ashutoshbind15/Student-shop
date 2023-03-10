import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Button from "../../components/UI/Button";

const AuthPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <Formik
          initialValues={{
            name: "",
            location: "",
            email: "",
            contact: 0,
            password: "",
          }}
          onSubmit={async (values) => {
            await axios.post("/api/register", { ...values });
            await signIn("credentials", {
              email: values.email,
              password: values.password,
            });
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

            <label htmlFor="">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />

            <label htmlFor="">Contact</label>
            <Field type="number" name="contact" />
            <ErrorMessage name="contact" component="div" />
            <Button type="submit">Submit</Button>
            <Button>
              <Link href="/auth/login">Login</Link>
            </Button>
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

export default AuthPage;

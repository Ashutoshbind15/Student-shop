import { Field, Form, Formik } from "formik";
import { unstable_getServerSession } from "next-auth";
import Image from "next/image";
import { useState } from "react";
import Button from "../../components/UI/Button";
import { useUserMutations } from "../../hooks/mutations";
import { useUser } from "../../hooks/queries";
import { authOptions } from "../api/auth/[...nextauth]";

const ProfilePage = () => {
  const { err, isError, isLoading, profile } = useUser();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { editMutation } = useUserMutations();

  if (isError) {
    return <div>{err}</div>;
  } else if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="py-6 px-20 flex flex-col items-center text-black">
        <div className="flex justify-between items-center">
          <Image width={400} height={400} src="/images/a1.jpg" alt="avatar" />
          <div className="flex flex-col">
            <div>Name: {profile.name}</div>
            <div>Contact: {profile.contact}</div>
            <div>Email: {profile.email}</div>
            <div>Location: {profile.location}</div>
          </div>
        </div>

        <div className="flex items-center justify-around w-full">
          <div>Past Orders</div>
          <div>Billing informations</div>
        </div>
        <div className="flex items-center justify-around w-full">
          <Button onClick={() => setIsEditOpen((prev) => !prev)}>
            {" "}
            Edit Profile?{" "}
          </Button>
          <Button> Back To Home </Button>
        </div>

        {isEditOpen && (
          <div>
            <Formik
              initialValues={{
                name: profile.name,
                contact: profile.contact,
                email: profile.email,
                location: profile.location,
              }}
              onSubmit={(values) => {
                editMutation.mutate(values);
              }}
            >
              <Form className="flex flex-col">
                <label>Name</label>
                <Field
                  name="name"
                  type="text"
                  className="bg-slate-500 rounded-md py-2 px-4"
                />
                <label>Contact</label>
                <Field
                  name="contact"
                  type="number"
                  className="bg-slate-500 rounded-md py-2 px-4"
                />
                <label>Email</label>
                <Field
                  name="email"
                  type="text"
                  className="bg-slate-500 rounded-md py-2 px-4"
                />

                <label>Location</label>
                <Field
                  name="location"
                  type="text"
                  className="bg-slate-500 rounded-md py-2 px-4"
                />
                <Button type="submit">Edit</Button>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    );
  }
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
  } else
    return {
      props: {},
    };
};

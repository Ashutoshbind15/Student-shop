import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Student from "../../../models/Student";
import bcrypt from "bcryptjs";
import connectDB from "../../../utils/db";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await connectDB();

        const { email, password } = credentials;
        const student = await Student.findOne({ email: email });
        if (!student) return null;
        const isAuth = await bcrypt.compare(password, student.password);
        if (!isAuth) return null;

        return {
          id: student._id,
          role: student.role,
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);

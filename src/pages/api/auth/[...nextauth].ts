import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)


        // Add logic here to look up the user from the credentials supplied
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        // Checking against predefined details -> Only in Development
        if (username !== "admin@triage.com" || password !== "admin") {
          throw new Error("Invalid Credentials")
        }

        return {
          id: "1234",
          name: "Browny",
          username,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signin",
    error: "/auth/signin",
  },
  secret: "abcdefgh",

  callbacks: {
    jwt({token, user}) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session({session, token}) {
      return session
    },
  }
};

export default NextAuth(authOptions);

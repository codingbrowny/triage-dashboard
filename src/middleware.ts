import { withAuth } from "next-auth/middleware";

export default withAuth({
  // NextJS highly recommends adding secret to enviromnent varialble
    
  secret: "abcdefgh",
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/login"
    },
    callbacks: {
      authorized({token, req}) {
          return !!token
      },
  }
});

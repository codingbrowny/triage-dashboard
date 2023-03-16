import { withAuth } from "next-auth/middleware";

export default withAuth({
  // NextJS highly recommends adding secret to enviromnent varialble
    
  secret: "abcdefgh",
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signin",
    },
    callbacks: {
      authorized({token, req}) {
          return !!token
      },
  }
});

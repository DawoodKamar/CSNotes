import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

// Configuration object for next-auth
export const authOptions = {
  // Adapter to interface with the Prisma
  adapter: PrismaAdapter(prisma),
  // Session configuration to use JSON Web Tokens
  session: {
    strategy: "jwt",
  },
  // Array of providers for third-party authentication
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // customize the handling of JWT tokens and session objects
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.image;
      }
      return session;
    },
    // JWT callback is called whenever a JWT token is created or updated
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });
      if (!dbUser) {
        token.id = user.id;
        return token;
      }
      // If the user is found in the database, their details are used to update the token
      return {
        id: dbUser.id,
        name: dbUser.name,
        role: dbUser.role,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
};
export const getAuthSession = () => getServerSession(authOptions);

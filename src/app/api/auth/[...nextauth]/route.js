import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth/next";

// Authentication handler route, details in the auth file in the utils folder
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

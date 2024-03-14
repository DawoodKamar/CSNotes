"use server";

import { authOptions } from "./auth";

const { getServerSession } = require("next-auth");

// Get user auth session
const sess = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
export default sess;

import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Handle fetching the list of topics to display with error handling

export const GET = async () => {
  try {
    const topics = await prisma.topic.findMany();

    return new NextResponse(JSON.stringify(topics, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextRequest(
      JSON.stringify({ message: "Something went wrong." }, { status: 500 })
    );
  }
};

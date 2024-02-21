import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

//single post fetching

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug: slug },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextRequest(
      JSON.stringify({ message: "Something went wrong." }, { status: 500 })
    );
  }
};

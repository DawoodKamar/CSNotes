import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Single post fetching using its slug
// Also increment the post's view count each time its accessed

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug: slug },
      data: { views: { increment: 1 } },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextRequest(
      JSON.stringify({ message: "Something went wrong." }, { status: 500 })
    );
  }
};

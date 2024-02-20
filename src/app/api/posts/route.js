import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const topic = searchParams.get("topic");

  const POSTS_PER_PAGE = 5;

  const query = {
    take: POSTS_PER_PAGE,
    where: {
      ...(topic && { topicSlug: topic }),
    },
    skip: POSTS_PER_PAGE * (page - 1),
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextRequest(
      JSON.stringify({ message: "Something went wrong." }, { status: 500 })
    );
  }
};

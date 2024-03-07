import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Handles post list fetching, with pagination support, topic filtering and popularity sorting.

export const GET = async (req) => {
  // Get the request parameters
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const topic = searchParams.get("topic");
  const pop = searchParams.get("pop");

  // Number of posts per page
  const POSTS_PER_PAGE = 5;

  // Build the query for the database based on the rquest
  const query = {
    take: POSTS_PER_PAGE,
    where: {
      ...(topic && { topicSlug: topic }),
    },
    orderBy: {
      ...(pop ? { views: "desc" } : { createdAt: "desc" }),
    },
    skip: POSTS_PER_PAGE * (page - 1),
  };

  // Execute query and catch any errors
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

// Create a new post handler, with admin only ristriction

export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session || session.user.role !== "ADMIN") {
    return new NextRequest(
      JSON.stringify({ message: "Not Admin" }, { status: 401 })
    );
  }
  // Parse the request and create new post in the database
  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

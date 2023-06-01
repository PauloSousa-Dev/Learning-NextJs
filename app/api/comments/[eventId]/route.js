import { NextResponse } from "next/server";

export async function POST(request, params) {
  const eventId = params.eventId;
  const res = await request.json();
  const { email, name, text } = res;
  if (
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !text ||
    text.trim() === ""
  ) {
    return NextResponse.json({ message: "Invalid input" }, { status: 422 });
  }

  console.log(email, name, text);

  const newComment = {
    id: new Date().toISOString(),
    email,
    name,
    text,
  };

  return NextResponse.json(
    { message: "Added comment!", comment: newComment },
    { status: 201 }
  );
}

export async function GET(request, params) {
  const res = await request.json();
  const dummyList = [
    { id: "c1", name: "Max", text: "A first comment!" },
    { id: "c2", name: "Paulo", text: "A second comment!" },
  ];

  return NextResponse.json({ comments: dummyList }, { status: 200 });
}

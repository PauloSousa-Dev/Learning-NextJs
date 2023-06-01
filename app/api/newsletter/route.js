import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  const userEmail = res.email;

  if (!userEmail || !userEmail.includes("@")) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 422 }
    );
  }
  return NextResponse.json({ message: "Signed up!" }, { status: 201 });
}

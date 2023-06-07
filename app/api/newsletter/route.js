import { NextResponse } from "next/server";
import { connectDatabase, insertDocument } from "@/helpers/db-util";

export async function POST(request) {
  const res = await request.json();
  const userEmail = res.email;

  if (!userEmail || !userEmail.includes("@")) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 422 }
    );
  }
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    return NextResponse.json(
      { message: "Connecting to the database failed!" },
      { status: 500 }
    );
  }

  try {
    await insertDocument(client, "newsletter", { email: userEmail });
  } catch (error) {
    return NextResponse.json(
      { message: "Inserting data failed!" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }

  return NextResponse.json({ message: "Signed up!" }, { status: 201 });
}

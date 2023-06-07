import { NextResponse } from "next/server";
import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "@/helpers/db-util";

export async function POST(request, { params }) {
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

  const { eventId } = params;
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    return NextResponse.json(
      { message: "Connecting to the database failed!" },
      { status: 500 }
    );
  }

  const newComment = {
    email,
    name,
    text,
    eventId,
  };

  try {
    const result = await insertDocument(client, "comments", newComment);
    newComment._id = result.insertedId;
    return NextResponse.json(
      { message: "Added comment!", comment: newComment },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Inserting comment failed!" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

export async function GET(request, { params }) {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    return NextResponse.json(
      { message: "Connecting to the database failed!" },
      { status: 500 }
    );
  }

  const { eventId } = params;

  try {
    const documents = await getAllDocuments(
      client,
      "comments",
      { _id: -1 },
      { eventId: eventId }
    );
    return NextResponse.json({ comments: documents }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Getting comments failed!" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

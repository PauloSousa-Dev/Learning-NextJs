import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const uri =
    "mongodb+srv://psousa:n.zp8RvE7ZJP7gH@cluster0.bzk930g.mongodb.net/events?retryWrites=true&w=majority";

  const client = await MongoClient.connect(uri);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort, filter) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return documents;
}

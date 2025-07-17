import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const client = new MongoClient(process.env.DB_CONNECTION);
let db;

export async function connect() {
    if (!db) {
        await client.connect();
        db = client.db("reports");
        // const reports = db.collection("intel_reports");
        // console.log("connect to mongoDB");
    }
    return db;
}

// await db.collection("intel_report").insertOne({
//   fieldCode: "X92-A",
//   location: "Zone 12",
//   threatLevel: 5,
//   description: "Large convoy movement",
//   confirmed: false
// });
connect();
export default db;
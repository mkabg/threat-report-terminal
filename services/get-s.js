import { ObjectId } from "mongodb";
import { connectToDB } from "../db.js";

export async function getAllReports() {
    const db = await connectToDB();
    return db.collection("intel_reports").find().toArray();
}

export async function getDangerReports() {
    const db = await connectToDB();
    return db.collection("intel_reports").find({ threatLevel: { $gte: 4 } }).toArray();
}

export async function getReportById(id) {
    const db = await connectToDB();
    return db.collection("intel_reports").findOne({ _id: new ObjectId(id) });
}

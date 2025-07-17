import express from "express";
import {
    getAllReports,
    getAllDangerReports,
    getReportById,
} from "../ctrl/get.js";
import addReport from "../ctrl/add.js";
import updateReport from "../ctrl/update.js";
import deletReport from "../ctrl/del.js";

const router = express.Router();

router.get("/", getAllReports);
router.get("/high", getAllDangerReports);
router.get("/:id", getReportById);
router.post("/", addReport);
router.put("/:id/confirm", updateReport);
router.delete("/:id", deletReport);

export default router;
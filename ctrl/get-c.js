import * as reportService from "../services/get-s.js";

export async function getAllReports(req, res) {
    try {
        const reports = await reportService.getAllReports();
        res.json(reports);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Failed to fetch reports" });
    }
}

export async function getAllDangerReports(req, res) {
    try {
        const reports = await reportService.getDangerReports();
        res.json(reports);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Failed to fetch danger reports" });
    }
}

export async function getReportById(req, res) {
    try {
        const report = await reportService.getReportById(req.params.id);
        if (!report) return res.status(404).json({ msg: "Report not found" });
        res.json(report);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Failed to fetch report" });
    }
}

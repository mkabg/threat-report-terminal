import reportsRoutes from "./reports-r.js";

export default function configRoutes(app) {
    app.use("/reports", reportsRoutes);
    app.use((req, res) => console.log(res.status(404).json({msg: "route not found"})))
}
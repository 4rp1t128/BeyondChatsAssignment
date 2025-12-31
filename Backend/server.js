import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import articleRoutes from "./routes/articleRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/articles", articleRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

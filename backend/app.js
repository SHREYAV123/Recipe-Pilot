import express from "express";
import cors from "cors";
import recipeRoutes from "./src/routes/recipeRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/recipe", recipeRoutes);

export default app;
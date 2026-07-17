import express from "express";
import { getRecipe } from "../controllers/recipeController.js";

const router = express.Router();

router.post("/", getRecipe);
router.post("/generate", getRecipe);

export default router;
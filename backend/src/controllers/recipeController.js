import { generateRecipe } from "../services/groqService.js";

const createFallbackRecipe = (ingredientsText) => {
  const ingredientList = ingredientsText
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    title: "Quick Pantry Recipe",
    description: `A simple, satisfying meal built from ${ingredientList.slice(0, 3).join(", ") || "your available ingredients"}.`,
    time: "20 min",
    servings: "2",
    difficulty: "Easy",
    ingredients: ingredientList.length ? ingredientList : ["olive oil", "salt", "pepper"],
    steps: [
      "Heat a pan with a small amount of oil.",
      "Add the main ingredients and cook until fragrant and tender.",
      "Season to taste and serve warm."
    ],
    swaps: ["Swap any vegetable for a similar one", "Use any herbs you already have"]
  };
};

export const getRecipe = async (req, res) => {
  try {
    const { ingredients, input, text } = req.body ?? {};
    const ingredientText =
      typeof ingredients === "string"
        ? ingredients
        : typeof input === "string"
          ? input
          : typeof text === "string"
            ? text
            : "";

    const recipe = await generateRecipe(ingredientText);

    if (typeof recipe === "string") {
      try {
        return res.json(JSON.parse(recipe));
      } catch {
        return res.json(createFallbackRecipe(ingredientText));
      }
    }

    return res.json(recipe);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
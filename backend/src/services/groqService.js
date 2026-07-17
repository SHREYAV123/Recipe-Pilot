import groq from "../config/groq.js";

const createFallbackRecipe = (ingredients) => {
  const ingredientList = ingredients
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    title: "Quick Pantry Recipe",
    description: `A simple, satisfying meal built around ${ingredientList.slice(0, 3).join(", ") || "your available ingredients"}.`,
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

export const generateRecipe = async (ingredients) => {
  const hasApiKey = typeof process.env.GROQ_API_KEY === "string" && process.env.GROQ_API_KEY.trim() !== "";

  if (!hasApiKey || !groq) {
    console.warn("Groq API key not configured, using built-in fallback recipe.");
    return createFallbackRecipe(ingredients);
  }

  const prompt = `
You are a professional chef.

Using these ingredients:

${ingredients}

Return valid JSON only with this structure:

{
  "title":"",
  "description":"",
  "time":"",
  "servings":"",
  "difficulty":"",
  "ingredients":[],
  "steps":[],
  "swaps":[]
}
`;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const content = completion?.choices?.[0]?.message?.content ?? "{}";

    try {
      const parsed = JSON.parse(content);
      return parsed;
    } catch {
      return createFallbackRecipe(ingredients);
    }
  } catch (error) {
    console.warn("Groq request failed, using fallback recipe.", error.message);
    return createFallbackRecipe(ingredients);
  }
};
import groq from "../config/groq.js";

const createFallbackRecipe = (ingredients) => {
  const ingredientList = ingredients
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    title: "Quick Pantry Recipe",
    description: `A simple meal using ${ingredientList
      .slice(0, 3)
      .join(", ") || "your available ingredients"}.`,
    time: "20 min",
    servings: "2",
    difficulty: "Easy",
    ingredients:
      ingredientList.length > 0
        ? ingredientList
        : ["Olive Oil", "Salt", "Pepper"],
    steps: [
      "Heat a pan with a little oil.",
      "Add all ingredients and cook until tender.",
      "Season to taste.",
      "Serve hot."
    ],
    swaps: [
      "Replace vegetables with any available vegetables.",
      "Use any herbs available."
    ]
  };
};

export const generateRecipe = async (ingredients) => {
  if (!process.env.GROQ_API_KEY) {
    console.log("No API key found.");
    return createFallbackRecipe(ingredients);
  }

const prompt = `
You are an expert chef.

Create exactly ONE recipe using ONLY the ingredients provided below.

Available ingredients:
${ingredients}

STRICT RULES:
1. Use ONLY the ingredients listed above.
2. Do NOT add or invent any extra ingredients.
3. You may use only Salt, Pepper, Oil and Water as basic pantry items.
4. If another ingredient could improve the recipe, mention it ONLY in the "swaps" section.
5. Return ONLY valid JSON.
6. Do NOT use markdown.
7. Do NOT wrap the JSON inside \`\`\`.
8. The response must exactly match this JSON structure.

{
  "title": "",
  "description": "",
  "time": "",
  "servings": "",
  "difficulty": "",
  "ingredients": [
    {
      "name": "",
      "quantity": ""
    }
  ],
  "steps": [
    {
      "step": ""
    }
  ],
  "swaps": [
    {
      "swap": "",
      "alternative": ""
    }
  ]
}
`;
  try {
    console.log("Sending request to Groq...");

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    console.log("Groq Response:");
    console.dir(completion, { depth: null });

    let content = completion.choices[0].message.content;

    console.log("Raw Content:");
    console.log(content);
    console.log("First Character:", content[0]);
console.log("Last Character:", content[content.length - 1]);

    // Remove markdown code fences if present
    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("Cleaned Content:");
    console.log(content);

    try {
  const recipe = JSON.parse(content);
  return recipe;
} catch (err) {
  console.error("JSON Parse Error:", err);

  console.log("Invalid JSON received:");
  console.log(content);

  return createFallbackRecipe(ingredients);
}
  } catch (error) {
    console.error("========== GROQ ERROR ==========");
    console.error(error);

    return createFallbackRecipe(ingredients);
  }
};
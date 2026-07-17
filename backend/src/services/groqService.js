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
You are a professional chef and recipe writer.

Your task is to create ONE delicious recipe using ONLY the ingredients provided by the user.

Available ingredients:
${ingredients}

STRICT RULES:

1. Use ONLY the ingredients listed above.
2. Salt, Black Pepper, Cooking Oil, Butter and Water are the ONLY pantry ingredients you may assume are available.
3. Do NOT invent or add any other ingredient.
4. If another ingredient could improve the recipe, DO NOT use it in the recipe. Mention it ONLY inside the "swaps" section.
5. Create a realistic recipe that can actually be cooked using the available ingredients.
6. Generate a short, attractive recipe title.
7. Write a 1-2 sentence description of the dish.
8. Estimate cooking time.
9. Estimate servings.
10. Choose one difficulty level from:
   - Easy
   - Medium
   - Hard

INGREDIENT RULES:

11. List ONLY the ingredients actually used.
12. Every ingredient must include:
    - name
    - quantity
13. Never include ingredients that are not available.

COOKING STEP RULES:

14. Generate ONLY the number of steps the recipe naturally requires.
15. Simple recipes should have 4-5 steps.
16. Medium recipes should have 6-8 steps.
17. Complex recipes may have up to 10 steps.
18. Never add unnecessary steps just to increase the count.
19. Never combine multiple cooking actions into one step.
20. Every step must contain ONE clear cooking action.
21. Keep the steps short, clear and beginner-friendly.
22. Keep all steps in the correct cooking order.
23. Do not repeat instructions.

SWAP RULES:

24. Suggest at most 3 optional swaps.
25. Swaps are OPTIONAL.
26. Each swap must contain:
    - swap
    - alternative

OUTPUT RULES:

27. Return ONLY valid JSON.
28. Do NOT write markdown.
29. Do NOT wrap the response inside \`\`\`.
30. Do NOT include explanations, notes or extra text.
31. The response MUST exactly match the following JSON structure.

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
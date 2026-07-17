import { useState } from "react";
import { generateRecipe } from "../services/api";

export default function useRecipe() {
  const [recipe, setRecipe] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const generate = async (ingredients, servings = 2) => {
    if (!ingredients || ingredients.length === 0) {
      setError("Please add at least one ingredient.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await generateRecipe({
        ingredients,
        servings,
      });

      setRecipe(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to generate recipe."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetRecipe = () => {
    setRecipe(null);
    setError("");
  };

  return {
    recipe,
    loading,
    error,
    generate,
    resetRecipe,
  };
}
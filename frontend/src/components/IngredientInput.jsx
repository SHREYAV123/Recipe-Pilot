import { useState } from "react";
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";
import Error from "./Error";
import EmptyState from "./EmptyState";

import {
  Sparkles,
  Trash2,
  ChefHat,
} from "lucide-react";
import { generateRecipe } from "../services/api";

export default function IngredientInput() {
  const [ingredients, setIngredients] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

 const handleGenerate = async () => {
  const trimmedIngredients = ingredients.trim();

  if (!trimmedIngredients) {
    setRecipe(null);
    setError("⚠️ Please enter at least one ingredient before generating a recipe.");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const data = await generateRecipe({
      ingredients: trimmedIngredients,
    });

    setRecipe(data);
  } catch (err) {
    setRecipe(null);

    setError(
      err?.response?.data?.message ||
      "Unable to generate a recipe right now."
    );
  } finally {
    setLoading(false);
  }
};

  const clearInput = () => {
    setIngredients("");
    setRecipe(null);
    setError("");
  };

  return (
    <section className="relative">

      <div
        className="
        max-w-4xl
        mx-auto

        rounded-3xl

        bg-white

        border
        border-[#E8E2D7]

        shadow-xl
        shadow-[#143D2A]/10

        p-8
        md:p-10
        "
      >

        {/* Heading */}

        <div className="text-center mb-10">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20">

            <ChefHat
              className="text-[#2E7D32]"
              size={18}
            />

            <span className="text-[#2E7D32] font-semibold">
              AI Recipe Generator
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-bold text-[#143D2A]">
            What's in your fridge?
          </h2>

          <p className="mt-4 text-[#5F6F65] max-w-2xl mx-auto leading-8">
            Enter each ingredient on a new line.
            Our AI will create a personalized recipe using
            what you already have.
          </p>

        </div>

        {/* Textarea */}

        <textarea
          rows={8}
          value={ingredients}
        onChange={(e) => {
  setIngredients(e.target.value);

  if (error) {
    setError("");
  }
}}
          placeholder={`Example:

🥚 Eggs
🧀 Cheese
🍅 Tomato
🥛 Milk
🍞 Bread`}
          className="
          w-full

          rounded-2xl

          bg-[#FCF8F2]

          border
          border-[#D9D2C6]

          focus:border-[#2E7D32]
          focus:ring-4
          focus:ring-[#2E7D32]/20

          outline-none

          p-6

          text-lg

          text-[#143D2A]

          placeholder:text-[#8A8A8A]

          resize-none

          transition-all
          "
        />

        {/* Character Count */}

        <div className="mt-3 flex justify-between text-sm text-[#6B7280]">

          <span>
            One ingredient per line
          </span>

          <span>
            {ingredients.length} characters
          </span>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap gap-4">

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="
            flex-1

            flex
            items-center
            justify-center
            gap-2

            rounded-2xl

            py-4

            font-semibold

            text-white

            bg-gradient-to-r
            from-[#2E7D32]
            via-[#3FA34D]
            to-[#5BAA5B]

            hover:scale-[1.02]

            transition-all
            duration-300

            shadow-lg
            shadow-green-800/20

            disabled:opacity-60
            "
          >
            <Sparkles
              size={18}
              className="text-[#F4D35E] fill-[#F4D35E]"
            />

            {loading ? "Generating..." : "Generate Recipe"}

          </button>

          <button
            onClick={clearInput}
            className="
            px-6

            rounded-2xl

            bg-white

            border
            border-[#D9D2C6]

            text-[#143D2A]

            hover:bg-[#143D2A]
            hover:text-white
            hover:border-[#143D2A]

            transition-all
            duration-300

            flex
            items-center
            gap-2
            "
          >
            <Trash2 size={18} />

            Clear

          </button>

        </div>


{loading && <Loading />}

{error && <Error message={error} />}

{!loading && !recipe && !error && <EmptyState />}

    {recipe && <RecipeCard recipe={recipe} />}
      </div>
       <div className="flex items-center justify-center mt-20">

  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A227]/70"></div>

  <Sparkles
    size={18}
    className="mx-4 text-[#C9A227] fill-[#C9A227] animate-pulse"
  />

  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A227]/70"></div>

</div>

    </section>
  );
}
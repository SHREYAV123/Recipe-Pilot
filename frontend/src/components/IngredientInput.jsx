import { useState } from "react";
import RecipeCard from "./RecipeCard";

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
    if (!trimmedIngredients) return;

    setLoading(true);
    setError("");

    try {
      const data = await generateRecipe({ ingredients: trimmedIngredients });
      setRecipe(data);
    } catch (err) {
      setError(err?.response?.data?.message || "Unable to generate a recipe right now.");
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
          onChange={(e) => setIngredients(e.target.value)}
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

        {error && (
          <p className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}

        {recipe && (
  <div className="mt-8 rounded-3xl border border-[#E8E2D7] bg-[#FCF8F2] p-6 shadow-sm">

    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2E7D32]">
          Your Recipe
        </p>

        <h3 className="mt-2 text-2xl font-bold text-[#143D2A]">
          {recipe.title}
        </h3>
      </div>

      <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#143D2A] shadow-sm">
        {recipe.time} • {recipe.servings} servings
      </div>
    </div>

    <p className="mt-4 leading-7 text-[#5F6F65]">
      {recipe.description}
    </p>

    {/* INGREDIENTS */}

    <div className="mt-6 grid gap-6 md:grid-cols-2">

      <div>

        <h4 className="text-lg font-semibold text-[#143D2A]">
          Ingredients
        </h4>

        <ul className="mt-3 space-y-2">

          {recipe.ingredients?.map((item, index) => (

            <li
              key={index}
              className="flex justify-between border-b border-[#E8E2D7] py-2"
            >

              <span className="text-[#143D2A]">
                {item.name}
              </span>

              <span className="font-semibold text-[#2E7D32]">
                {item.quantity}
              </span>

            </li>

          ))}

        </ul>

      </div>

      {/* STEPS */}

      <div>

        <h4 className="text-lg font-semibold text-[#143D2A]">
          Cooking Steps
        </h4>

        <ol className="mt-3 space-y-3">

        {recipe.steps
  .flatMap((step) =>
    step.step
      .split(/\.\s+|\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => ({
        step: line.endsWith(".") ? line : line + ".",
      }))
  )
  .map((step, index) => (
    <div
      key={index}
      className="flex gap-4 bg-[#F8F5EF] border border-[#E8E2D7] rounded-xl p-5"
    >
      <div className="w-8 h-8 rounded-full bg-[#2E7D32] text-white flex items-center justify-center font-bold shrink-0">
        {index + 1}
      </div>

      <p className="text-[#143D2A] leading-7">
        {step.step}
      </p>
    </div>
  ))}

        </ol>

      </div>

    </div>

    {/* SWAPS */}

    {recipe.swaps?.length > 0 && (

      <div className="mt-8 rounded-2xl border border-[#E8E2D7] bg-white p-5">

        <h4 className="font-semibold text-[#143D2A] mb-4">
          Ingredient Swaps
        </h4>

        <ul className="space-y-3">

          {recipe.swaps.map((swap, index) => (

            <li
              key={index}
              className="flex gap-3"
            >

              <span className="text-[#C9A227]">
                🌿
              </span>

              <span className="text-[#5F6F65]">

                <strong className="text-[#143D2A]">
                  {swap.swap}
                </strong>

                {" → "}

                {swap.alternative}

              </span>

            </li>

          ))}

        </ul>

      </div>

    )}

  </div>
)}
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
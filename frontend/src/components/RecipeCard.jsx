import {
  Clock3,
  Users,
  ChefHat,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  const formattedSteps = recipe.steps
    ?.flatMap((step) =>
      (step.step || "")
        .split(/\.\s+|\n+/)
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => ({
          step: line.endsWith(".") ? line : line + ".",
        }))
    );

  return (
    <section className="max-w-5xl mx-auto mt-16">
      <div className="overflow-hidden rounded-3xl border border-[#D9D2C6] bg-white shadow-xl shadow-[#143D2A]/10">

        {/* Header */}
<div className="p-8 border-b border-[#E8E2D7]">
  <div className="flex items-start gap-5">

    {/* Icon */}

    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E7D32] via-[#3FA34D] to-[#5BAA5B] flex items-center justify-center shadow-lg shadow-green-800/20">
       <ChefHat
                size={28}
                className="text-white "
              />
               <Sparkles
              size={18}
              className="
              text-[#C9A227]
              fill-[#C9A227]
              animate-pulse
              drop-shadow-[0_0_10px_#C9A227]
              "
            />
      </div>
    </div>

    {/* Content */}

    <div className="flex-1">

      <h2 className="text-3xl font-bold text-[#143D2A]">
        {recipe.title}
      </h2>

      <p className="mt-3 leading-8 text-[#5F6F65]">
        {recipe.description}
      </p>

    </div>

  </div>
</div>

        {/* Stats */}

        <div className="grid gap-5 p-8 md:grid-cols-3">
          <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-5">
            <Clock3 className="mb-3 text-[#2E7D32]" />

            <p className="text-sm text-[#5F6F65]">
              Cooking Time
            </p>

            <h3 className="text-xl font-bold text-[#143D2A]">
              {recipe.time}
            </h3>
          </div>

          <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-5">
            <Users className="mb-3 text-[#2E7D32]" />

            <p className="text-sm text-[#5F6F65]">
              Servings
            </p>

            <h3 className="text-xl font-bold text-[#143D2A]">
              {recipe.servings}
            </h3>
          </div>

          <div className="rounded-2xl border border-[#E8E2D7] bg-[#F8F5EF] p-5">
            <ChefHat className="mb-3 text-[#2E7D32]" />

            <p className="text-sm text-[#5F6F65]">
              Difficulty
            </p>

            <h3 className="text-xl font-bold capitalize text-[#143D2A]">
              {recipe.difficulty}
            </h3>
          </div>
        </div>

        {/* Ingredients */}

        <div className="px-8 pb-8">
          <h3 className="mb-6 text-2xl font-bold text-[#143D2A]">
            🥗 Ingredients
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {recipe.ingredients?.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] p-4 transition hover:border-[#C9A227]"
              >
                <CheckCircle2
                  className="text-[#2E7D32]"
                  size={20}
                />

                <div className="flex w-full items-center justify-between">
                  <span className="font-medium text-[#143D2A]">
                    {item.name}
                  </span>

                  <span className="font-semibold text-[#2E7D32]">
                    {item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cooking Steps */}

        <div className="px-8 pb-8">
          <h3 className="mb-6 text-2xl font-bold text-[#143D2A]">
            👨‍🍳 Cooking Steps
          </h3>

          <div className="space-y-4">
            {formattedSteps?.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] p-5 transition hover:border-[#C9A227]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2E7D32] to-[#5BAA5B] font-bold text-white">
                  {index + 1}
                </div>

                <p className="leading-7 text-[#143D2A]">
                  {step.step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredient Swaps */}

        {recipe.swaps?.length > 0 && (
          <div className="px-8 pb-8">
            <h3 className="mb-6 text-2xl font-bold text-[#143D2A]">
              🌿 Ingredient Swaps
            </h3>

            <div className="space-y-4">
              {recipe.swaps.map((swap, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-[#E8E2D7] bg-[#F8F5EF] p-5 transition hover:border-[#C9A227]"
                >
                  <ArrowRight
                    className="text-[#2E7D32]"
                    size={18}
                  />

                  <div>
                    <span className="font-semibold text-[#143D2A]">
                      {swap.swap}
                    </span>

                    <span className="text-[#5F6F65]">
                      {" "}
                      → {swap.alternative}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
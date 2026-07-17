import {
  Clock3,
  Users,
  ChefHat,
  CheckCircle2,
} from "lucide-react";

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <section className="max-w-5xl mx-auto mt-16">

      <div
        className="
        rounded-3xl

        bg-white

        border
        border-[#D9D2C6]

        shadow-xl
        shadow-[#143D2A]/10

        overflow-hidden
        "
      >

        {/* Header */}

        <div className="p-8 border-b border-[#E8E2D7]">

          <div className="flex items-center gap-4">

            <div
              className="
              w-16
              h-16

              rounded-2xl

              bg-gradient-to-br
              from-[#2E7D32]
              via-[#3FA34D]
              to-[#5BAA5B]

              flex
              items-center
              justify-center

              shadow-lg
              shadow-green-800/20
              "
            >

              <ChefHat
                className="text-white"
                size={30}
              />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-[#143D2A]">
                {recipe.title}
              </h2>

              <p className="text-[#5F6F65] mt-1">
                {recipe.description}
              </p>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-5 p-8">

          <div className="rounded-2xl bg-[#F8F5EF] border border-[#E8E2D7] p-5">

            <Clock3
              className="text-[#2E7D32] mb-3"
            />

            <p className="text-[#5F6F65] text-sm">
              Cooking Time
            </p>

            <h3 className="text-xl font-bold text-[#143D2A]">
              {recipe.time}
            </h3>

          </div>

          <div className="rounded-2xl bg-[#F8F5EF] border border-[#E8E2D7] p-5">

            <Users
              className="text-[#2E7D32] mb-3"
            />

            <p className="text-[#5F6F65] text-sm">
              Servings
            </p>

            <h3 className="text-xl font-bold text-[#143D2A]">
              {recipe.servings}
            </h3>

          </div>

          <div className="rounded-2xl bg-[#F8F5EF] border border-[#E8E2D7] p-5">

            <ChefHat
              className="text-[#2E7D32] mb-3"
            />

            <p className="text-[#5F6F65] text-sm">
              Difficulty
            </p>

            <h3 className="text-xl font-bold text-[#143D2A]">
              {recipe.difficulty}
            </h3>

          </div>

        </div>

        {/* Ingredients */}

        <div className="px-8 pb-8">

          <h3 className="text-2xl font-bold text-[#143D2A] mb-6">
            Ingredients
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            {recipe.ingredients.map((item, index) => (

              <div
                key={index}
                className="
                flex
                items-center
                gap-3

                bg-[#F8F5EF]

                border
                border-[#E8E2D7]

                rounded-xl

                p-4

                hover:border-[#C9A227]

                transition
                "
              >

                <CheckCircle2
                  className="text-[#2E7D32]"
                  size={20}
                />

                <span className="text-[#143D2A]">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Steps */}

        <div className="px-8 pb-8">

          <h3 className="text-2xl font-bold text-[#143D2A] mb-6">
            Cooking Steps
          </h3>

          <div className="space-y-4">

            {recipe.steps.map((step, index) => (

              <div
                key={index}
                className="
                flex
                gap-4

                bg-[#F8F5EF]

                border
                border-[#E8E2D7]

                rounded-xl

                p-5

                hover:border-[#C9A227]

                transition
                "
              >

                <div
                  className="
                  w-8
                  h-8

                  rounded-full

                  bg-gradient-to-br
                  from-[#2E7D32]
                  to-[#5BAA5B]

                  text-white

                  flex
                  items-center
                  justify-center

                  font-bold

                  shrink-0
                  "
                >
                  {index + 1}
                </div>

                <p className="leading-7 text-[#143D2A]">
                  {step}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
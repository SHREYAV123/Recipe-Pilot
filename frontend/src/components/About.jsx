import { ChefHat, Sparkles, Leaf, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/20 text-[#2E7D32] font-semibold shadow-lg shadow-[#2E7D32]/10">
            <Sparkles
              size={16}
              className="text-[#C9A227] fill-[#C9A227] animate-pulse"
            />
            About Recipe Pilot
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#143D2A] leading-tight">
            Cook Smarter,
            <br />
            Not Harder.
          </h2>

          <p className="mt-8 text-lg text-[#5F6F65] leading-8">
            Recipe Pilot is an AI-powered cooking assistant that helps you
            create delicious meals using ingredients already available in
            your kitchen.
          </p>

          <p className="mt-6 text-lg text-[#5F6F65] leading-8">
            Simply enter your ingredients and our AI generates personalized
            recipes, cooking instructions, ingredient substitutions and
            serving recommendations within seconds.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-[#E8E2D7] shadow-md">

              <ChefHat className="text-[#2E7D32]" />

              <span className="text-[#143D2A] font-medium">
                Easy Cooking
              </span>

            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-[#E8E2D7] shadow-md">

              <Leaf className="text-[#2E7D32]" />

              <span className="text-[#143D2A] font-medium">
                Healthy Meals
              </span>

            </div>

            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-[#E8E2D7] shadow-md">

              <Heart className="text-red-500 fill-red-500" />

              <span className="text-[#143D2A] font-medium">
                Save Food
              </span>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div>

          <div
            className="
            rounded-3xl

            bg-white

            border
            border-[#E8E2D7]

            shadow-xl
            shadow-[#143D2A]/10

            p-10
            "
          >

            <div className="flex justify-center">

              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#2E7D32] via-[#3FA34D] to-[#5BAA5B] flex items-center justify-center shadow-lg shadow-green-800/20">

                <ChefHat
                  size={48}
                  className="text-white"
                />

              </div>

            </div>

            <h3 className="text-3xl font-bold text-center mt-8 text-[#143D2A]">
              Why Recipe Pilot?
            </h3>

            <div className="mt-10 space-y-5">

              <div className="bg-[#F8F5EF] rounded-2xl p-5 border border-[#E8E2D7] text-[#143D2A]">
                🍳 Reduce food waste by using available ingredients.
              </div>

              <div className="bg-[#F8F5EF] rounded-2xl p-5 border border-[#E8E2D7] text-[#143D2A]">
                🤖 AI creates recipes in just a few seconds.
              </div>

              <div className="bg-[#F8F5EF] rounded-2xl p-5 border border-[#E8E2D7] text-[#143D2A]">
                🥗 Healthy and personalized meal suggestions.
              </div>

              <div className="bg-[#F8F5EF] rounded-2xl p-5 border border-[#E8E2D7] text-[#143D2A]">
                📖 Step-by-step cooking instructions.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
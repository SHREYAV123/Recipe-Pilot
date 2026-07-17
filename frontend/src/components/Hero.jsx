import {
 
  Sparkles,
  ArrowRight,
  ChefHat,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FCF8F2]"
    >
      {/* Background Glow */}

      <div className="absolute -top-20 -left-24 w-[450px] h-[450px] rounded-full bg-[#2E7D32]/10 blur-[180px]" />

      <div className="absolute bottom-0 -right-32 w-[550px] h-[550px] rounded-full bg-[#C9A227]/10 blur-[200px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full bg-[#5BAA5B]/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <h1
            className="mt-8 text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-[#143D2A]"
            style={{ fontFamily: "Poppins" }}
          >
            Cook Smarter

            <br />

            With

            <span
              className="block bg-gradient-to-r from-[#2E7D32] via-[#5BAA5B] to-[#C9A227] bg-clip-text text-transparent"
              style={{ fontFamily: "Caveat" }}
            >
              Your Fridge
            </span>

            Ingredients
          </h1>

          {/* Paragraph */}

          <p
            className="mt-8 text-lg leading-9 text-[#5F6F65] max-w-2xl"
            style={{ fontFamily: "Inter" }}
          >
            Discover delicious recipes using ingredients already
            available in your kitchen. AI generates step-by-step
            cooking instructions, serving adjustments, and smart
            ingredient substitutions in seconds.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#generator"
              className="
              group
              flex
              items-center
              gap-2

              px-8
              py-4

              rounded-2xl

              font-semibold

              text-white

              bg-gradient-to-r
              from-[#2E7D32]
              via-[#3FA34D]
              to-[#5BAA5B]

              shadow-xl
              shadow-green-800/20

              hover:scale-105

              transition-all
              duration-300
              "
            >
              Generate Recipe

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </a>

            <a
              href="#features"
              className="
              px-8
              py-4

              rounded-2xl

              border
              border-[#D9D2C6]

              bg-white

              text-[#143D2A]

              hover:border-[#C9A227]
              hover:bg-[#FFF8E7]

              transition-all
              duration-300
              "
            >
              Explore Features
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hidden lg:flex justify-center">

          <div
            className="
            w-full
            max-w-md

            rounded-3xl

            bg-white

            border
            border-[#E8E2D7]

            shadow-xl
            shadow-[#143D2A]/10

            p-8
            "
          >

            <div className="flex justify-center mb-6">

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#2E7D32] via-[#3FA34D] to-[#5BAA5B] flex items-center justify-center shadow-lg">

                <ChefHat
                  className="text-white"
                  size={42}
                />

              </div>

            </div>

            <h3 className="text-3xl font-bold text-center text-[#143D2A]">
              AI Recipe Generator
            </h3>

            <p className="text-center text-[#5F6F65] mt-4 leading-7">
              Enter ingredients and let AI create a delicious recipe
              specially for you.
            </p>

            <div className="mt-10 space-y-4">

              <div className="bg-[#F8F5EF] border border-[#E8E2D7] rounded-xl p-4 text-[#143D2A]">
                🥚 Eggs
              </div>

              <div className="bg-[#F8F5EF] border border-[#E8E2D7] rounded-xl p-4 text-[#143D2A]">
                🧀 Cheese
              </div>

              <div className="bg-[#F8F5EF] border border-[#E8E2D7] rounded-xl p-4 text-[#143D2A]">
                🍅 Tomato
              </div>

            </div>

            <button
              disabled
              className="
              mt-8
              w-full

              py-4

              rounded-xl

              bg-[#D9D2C6]

              text-[#6B7280]

              cursor-not-allowed
              "
            >
              Generate to View Recipe
            </button>

          </div>

        </div>
  
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
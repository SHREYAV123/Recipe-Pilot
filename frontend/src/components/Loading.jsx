import { ChefHat } from "lucide-react";

export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto mt-12">

      <div
        className="
        rounded-3xl

        bg-white

        border
        border-[#D9D2C6]

        shadow-xl
        shadow-[#143D2A]/10

        p-12

        text-center
        "
      >

        {/* Icon */}

        <div
          className="
          w-20
          h-20

          mx-auto

          rounded-full

          bg-gradient-to-br
          from-[#2E7D32]
          via-[#3FA34D]
          to-[#5BAA5B]

          flex
          items-center
          justify-center

          shadow-lg
          shadow-green-800/20

          animate-pulse
          "
        >

          <ChefHat
            className="text-white"
            size={38}
          />

        </div>

        {/* Heading */}

        <h2 className="mt-8 text-3xl font-bold text-[#143D2A]">
          AI is Cooking...
        </h2>

        {/* Description */}

        <p className="mt-3 text-[#5F6F65]">
          Creating a delicious recipe for you 🍳
        </p>

        {/* Loading Dots */}

        <div className="mt-8 flex justify-center gap-3">

          <span
            className="
            w-3
            h-3

            rounded-full

            bg-[#2E7D32]

            animate-bounce
            "
          ></span>

          <span
            className="
            w-3
            h-3

            rounded-full

            bg-[#C9A227]

            animate-bounce
            "
            style={{ animationDelay: "0.15s" }}
          ></span>

          <span
            className="
            w-3
            h-3

            rounded-full

            bg-[#5BAA5B]

            animate-bounce
            "
            style={{ animationDelay: "0.3s" }}
          ></span>

        </div>

      </div>

    </div>
  );
}
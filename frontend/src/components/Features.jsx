import {
  Sparkles,
  ChefHat,
  BookOpen,
  RefreshCw,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Fridge to Recipe",
    description:
      "Enter the ingredients available in your kitchen and instantly get recipe suggestions.",
  },
  {
    icon: Sparkles,
    title: "AI Powered",
    description:
      "Generate unique and personalized recipes using the Gemini AI model.",
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Guide",
    description:
      "Easy cooking instructions that anyone can follow, from beginners to experts.",
  },
  {
    icon: RefreshCw,
    title: "Ingredient Swaps",
    description:
      "Missing an ingredient? AI recommends smart alternatives available in your kitchen.",
  },
  {
    icon: Clock3,
    title: "Quick Recipes",
    description:
      "Find recipes based on available cooking time and prepare meals faster.",
  },
  {
    icon: ShieldCheck,
    title: "Healthy Choices",
    description:
      "Receive healthier cooking suggestions with balanced ingredients.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <span
            className="
            inline-flex
            items-center
            gap-2

            px-5
            py-3

            rounded-full

            bg-[#2E7D32]/10

            border
            border-[#2E7D32]/20

            text-[#2E7D32]

            font-semibold

            shadow-lg
            shadow-[#2E7D32]/10
            "
          >
            <Sparkles
              size={16}
              className="text-[#C9A227] fill-[#C9A227] animate-pulse"
            />

            Features
          </span>

          <h2 className="mt-7 text-5xl font-bold text-[#143D2A]">
            Why Choose Recipe Pilot?
          </h2>

          <p className="mt-7 max-w-2xl mx-auto text-[#5F6F65] text-lg leading-8">
            Everything you need to cook delicious meals using the
            ingredients already available in your kitchen.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                group

                rounded-3xl

                bg-white

                border
                border-[#E8E2D7]

                p-8

                hover:border-[#C9A227]
                hover:-translate-y-2

                transition-all
                duration-300

                shadow-lg
                hover:shadow-2xl
                hover:shadow-[#C9A227]/15
                "
              >

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
                  shadow-green-900/20

                  mb-6
                  "
                >
                  <Icon
                    size={30}
                    className="text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#143D2A]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-[#5F6F65] leading-8">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>
        {/* Section Divider */}


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
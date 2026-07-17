import { ChefHat } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="max-w-5xl mx-auto mt-16">

      <div
        className="
        rounded-3xl

        bg-white

        border
        border-dashed
        border-[#D9D2C6]

        shadow-xl
        shadow-[#143D2A]/10

        p-14

        text-center
        "
      >

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2E7D32]/10">

          <ChefHat
            size={50}
            className="text-[#2E7D32]"
          />

        </div>

        <h2 className="mt-6 text-3xl font-bold text-[#143D2A]">
          No Recipe Yet
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-[#5F6F65] leading-8">
          Add ingredients above and click
          <strong className="text-[#2E7D32]">
            {" "}Generate Recipe{" "}
          </strong>
          to receive an AI-powered recipe.
        </p>

      </div>

    </div>
  );
}
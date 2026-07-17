import { X } from "lucide-react";

export default function IngredientList({
  ingredients,
  removeIngredient,
}) {
  if (!ingredients?.length) return null;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-[#143D2A] mb-4">
        Ingredients
      </h3>

      <div className="flex flex-wrap gap-3">
        {ingredients.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              justify-between
              gap-3

              px-5
              py-3

              rounded-full

              bg-white

              border
              border-[#D9D2C6]

              shadow-sm

              hover:border-[#C9A227]
              transition-all
            "
          >
            <div className="flex items-center gap-2">
              <span className="font-medium text-[#143D2A]">
                {typeof item === "string" ? item : item.name}
              </span>

              {typeof item !== "string" && (
                <span className="text-[#2E7D32] text-sm font-semibold">
                  {item.quantity}
                </span>
              )}
            </div>

            <button
              onClick={() => removeIngredient(index)}
              className="text-red-500 hover:text-red-700 transition"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
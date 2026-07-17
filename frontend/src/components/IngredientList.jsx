export default function IngredientList({
  ingredients,
  removeIngredient,
}) {
  if (!ingredients.length) return null;

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
            gap-3

            px-5
            py-3

            rounded-full

            bg-white

            border
            border-[#D9D2C6]

            shadow-md
            shadow-[#143D2A]/10

            hover:border-[#C9A227]
            hover:shadow-lg

            transition-all
            duration-300
            "
          >
            <span className="text-[#143D2A] font-medium">
              {item}
            </span>

            <button
              onClick={() => removeIngredient(index)}
              className="
              w-6
              h-6

              flex
              items-center
              justify-center

              rounded-full

              text-red-500

              hover:bg-red-100
              hover:text-red-700

              transition-all
              duration-200
              "
            >
              ✕
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}
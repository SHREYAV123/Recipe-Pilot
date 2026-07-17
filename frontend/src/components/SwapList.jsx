export default function SwapList({ swaps }) {
  if (!swaps?.length) return null;

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-[#143D2A] mb-5">
        Ingredient Swaps
      </h3>

      <div className="space-y-4">
        {swaps.map((swap, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-4

              bg-white
              border
              border-[#D9D2C6]

              rounded-2xl

              p-5

              shadow-md
              shadow-[#143D2A]/5

              hover:border-[#C9A227]
              hover:shadow-lg
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            <span className="text-2xl">🌿</span>

            <div className="flex-1">
              <p className="font-semibold text-[#143D2A]">
                Replace{" "}
                <span className="text-[#2E7D32]">
                  {swap.swap}
                </span>
              </p>

              <p className="mt-1 text-[#5F6F65]">
                Alternative:{" "}
                <span className="font-medium text-[#143D2A]">
                  {swap.alternative}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
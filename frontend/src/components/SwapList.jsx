export default function SwapList({
  swaps,
}) {
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
            items-center
            gap-3

            bg-white

            border
            border-[#D9D2C6]

            rounded-2xl

            p-5

            text-[#143D2A]

            shadow-md
            shadow-[#143D2A]/5

            hover:border-[#C9A227]
            hover:shadow-lg
            hover:-translate-y-1

            transition-all
            duration-300
            "
          >

            <span className="text-[#2E7D32] text-xl">
              🌿
            </span>

            <span className="leading-7">
              {swap}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}
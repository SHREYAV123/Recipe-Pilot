import { Minus, Plus } from "lucide-react";

export default function ServingControl({
  servings,
  increase,
  decrease,
}) {
  return (
    <div className="flex items-center justify-center gap-5">

      <button
        onClick={decrease}
        className="
        w-12
        h-12

        flex
        items-center
        justify-center

        rounded-xl

        bg-white

        border
        border-[#D9D2C6]

        text-[#143D2A]

        shadow-md

        hover:bg-[#143D2A]
        hover:text-white
        hover:border-[#143D2A]

        transition-all
        duration-300
        "
      >
        <Minus size={20} />
      </button>

      <span className="text-xl font-bold text-[#143D2A]">
        {servings} Servings
      </span>

      <button
        onClick={increase}
        className="
        w-12
        h-12

        flex
        items-center
        justify-center

        rounded-xl

        bg-gradient-to-r
        from-[#2E7D32]
        via-[#3FA34D]
        to-[#5BAA5B]

        text-white

        shadow-lg
        shadow-green-800/20

        hover:scale-105

        transition-all
        duration-300
        "
      >
        <Plus size={20} />
      </button>

    </div>
  );
}
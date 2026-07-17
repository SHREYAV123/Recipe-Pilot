import { useState } from "react";

export default function StepChecklist({
  steps,
}) {
  const [checked, setChecked] = useState([]);

  const toggle = (index) => {
    if (checked.includes(index)) {
      setChecked(
        checked.filter((i) => i !== index)
      );
    } else {
      setChecked([...checked, index]);
    }
  };

  return (
    <div className="space-y-4">

      {steps.map((step, index) => (

        <label
          key={index}
          className={`
            flex
            items-start
            gap-4

            p-5

            rounded-2xl

            border

            transition-all
            duration-300

            cursor-pointer

            ${
              checked.includes(index)
                ? "bg-[#EAF7EA] border-[#2E7D32] shadow-md shadow-green-200/40"
                : "bg-white border-[#D9D2C6] hover:border-[#C9A227] hover:shadow-md"
            }
          `}
        >
          <input
            type="checkbox"
            checked={checked.includes(index)}
            onChange={() => toggle(index)}
            className="
              mt-1

              h-5
              w-5

              accent-[#2E7D32]

              cursor-pointer
            "
          />

          <span
            className={`
              leading-7

              ${
                checked.includes(index)
                  ? "text-[#2E7D32] line-through"
                  : "text-[#143D2A]"
              }
            `}
          >
            {step}
          </span>

        </label>

      ))}

    </div>
  );
}
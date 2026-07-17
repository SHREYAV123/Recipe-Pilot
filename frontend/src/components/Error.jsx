import { AlertTriangle } from "lucide-react";

export default function Error({ message }) {
  return (
    <div className="max-w-5xl mx-auto mt-12">

      <div
        className="
        rounded-3xl

        bg-[#FFF5F5]

        border
        border-[#F5C2C2]

        shadow-lg
        shadow-red-200/40

        p-8

        flex
        gap-5
        "
      >

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">

          <AlertTriangle
            size={30}
            className="text-red-600"
          />

        </div>

        <div>

          <h3 className="text-2xl font-bold text-red-700">
            Something went wrong
          </h3>

          <p className="mt-2 text-[#5F6F65] leading-7">
            {message}
          </p>

        </div>

      </div>

    </div>
  );
}
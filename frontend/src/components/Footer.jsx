import { ChefHat, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-14 border-t  border-[#D9D2C6] bg-gradient-to-b from-[#F8F5EF] to-[#EFE7DA]">

      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* Logo */}

        <div className="flex flex-col items-center text-center">

          <div className="mt-1 flex items-center justify-center gap-5">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2E7D32] via-[#3FA34D] to-[#5BAA5B] flex items-center justify-center shadow-lg shadow-green-800/20">

              <ChefHat
                size={28}
                className="text-white animate-sparkle"
              />

            </div>

            <h2 className="text-2xl font-bold text-[#143D2A]">
              Recipe Pilot
            </h2>

            <Sparkles
              size={18}
              className="
              text-[#C9A227]
              fill-[#C9A227]
              animate-pulse
              drop-shadow-[0_0_10px_#C9A227]
              "
            />

          </div>

          <p className="mt-3 max-w-lg text-[#5F6F65] leading-7 text-sm">
            Transform everyday ingredients into delicious meals
            using the power of Artificial Intelligence.
          </p>

        </div>

        {/* Navigation */}

        <div className="mt-8 flex flex-wrap justify-center gap-6 font-medium">

          <a
            href="#home"
            className="text-[#143D2A] hover:text-[#C9A227] transition"
          >
            Home
          </a>

          <a
            href="#generator"
            className="text-[#143D2A] hover:text-[#C9A227] transition"
          >
            Generator
          </a>

          <a
            href="#features"
            className="text-[#143D2A] hover:text-[#C9A227] transition"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-[#143D2A] hover:text-[#C9A227] transition"
          >
            About
          </a>

        </div>

        {/* Contact */}

        <div className="mt-8 flex justify-center gap-4">

          <a
            href="https://github.com/SHREYAV123"
            target="_blank"
            rel="noreferrer"
            className="
            px-5
            py-2.5
            rounded-xl

            bg-white

            border
            border-[#D9D2C6]

            text-[#143D2A]

            hover:bg-[#143D2A]
            hover:text-white
            hover:border-[#143D2A]

            transition
            "
          >
            GitHub
          </a>

          <a
            href="mailto:your@email.com"
            className="
            px-5
            py-2.5
            rounded-xl

            bg-white

            border
            border-[#D9D2C6]
          

            text-[#143D2A]

            hover:bg-[#143D2A]
            hover:text-white
            hover:border-[#143D2A]

            transition
            "
          >
            Email
          </a>

        </div>

        {/* Divider */}

        <div className="mt-8 border-t border-[#D9D2C6]"></div>

        {/* Bottom */}

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-[#6B7280] text-sm">
            © 2026 Recipe Pilot. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-[#5F6F65] text-sm">

            Made with

            <Heart
              size={15}
              className="text-red-500 fill-red-500"
            />

            by

            <span className="font-semibold text-[#2E7D32]">
              Shreya Sahu
            </span>

          </p>

        </div>

      </div>

    </footer>
  );
}
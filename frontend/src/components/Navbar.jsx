import { useState } from "react";
import {
  ChefHat,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "Generator", link: "#generator" },
  { name: "Features", link: "#features" },
  { name: "About", link: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      z-50

      w-[76%]
      max-w-5xl

      rounded-full

      bg-[#143D2A]/95
      backdrop-blur-xl

      border
      border-[#295A42]

      shadow-[0_12px_35px_rgba(20,61,42,0.35)]

      transition-all
      duration-300
      "
    >
      <div className="px-8 py-3 flex items-center">

        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-4"
        >
          <div
            className="
            relative

            flex
            items-center
            justify-center

            w-12
            h-12

            rounded-2xl

            bg-gradient-to-br
            from-[#2E7D32]
            via-[#3E8E41]
            to-[#5BAA5B]

            shadow-lg
            shadow-green-900/40

            transition-all
            duration-300

            hover:scale-105
            "
          >
            <ChefHat
              size={24}
              className="text-white"
            />

            <Sparkles
              size={12}
              className="
              absolute
              top-1
              right-1

              text-[#F4D35E]
              fill-[#F4D35E]

              animate-pulse

              drop-shadow-[0_0_10px_#F4D35E]
              "
            />
          </div>

          <div>

            <h1
              className="text-2xl font-bold tracking-tight text-[#FFFDF7]"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Recipe Pilot
            </h1>

            <p
              className="text-xs text-[#D7E6D5]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              AI Powered Recipe Generator
            </p>

          </div>

        </a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center ml-auto gap-8">

          {navLinks.map((item) => (

            <li key={item.name}>

              <a
                href={item.link}
                className="
                group
                relative

                text-[15px]
                font-semibold

                text-[#F8F5EF]

                hover:text-[#F4D35E]

                transition-all
                duration-300
                "
              >
                {item.name}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-2

                  h-[2px]
                  w-0

                  bg-gradient-to-r
                  from-[#F4D35E]
                  to-[#C9A227]

                  transition-all
                  duration-300

                  group-hover:w-full
                  "
                />

              </a>

            </li>

          ))}

        </ul>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          md:hidden

          ml-auto

          p-2

          rounded-xl

          hover:bg-[#1C5138]

          transition
          "
        >
          {menuOpen ? (
            <X
              size={28}
              className="text-[#FFFDF7]"
            />
          ) : (
            <Menu
              size={28}
              className="text-[#FFFDF7]"
            />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div
          className="
          md:hidden

          rounded-b-3xl

          bg-[#143D2A]/95

          backdrop-blur-xl

          border-t
          border-[#295A42]

          overflow-hidden
          "
        >

          {navLinks.map((item) => (

            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="
              block

              px-8
              py-4

              text-[#F8F5EF]

              hover:bg-[#1C5138]
              hover:text-[#F4D35E]

              transition
              "
            >
              {item.name}
            </a>

          ))}

        </div>

      )}

    </nav>
  );
}
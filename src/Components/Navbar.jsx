import { FaAsterisk, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="absolute top-6 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="bg-white rounded-full shadow-md px-8 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <FaAsterisk className="text-pink-400 text-lg" />
            <h1 className="text-xl font-semibold text-gray-900">
              GlowCare
            </h1>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-12 text-gray-600 font-medium">
            <li>
              <a href="#home" className="hover:text-pink-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#shop" className="hover:text-pink-500 transition">
                Shop
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-pink-500 transition">
                About
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-pink-500 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Search Icon */}
          <button className="text-gray-600 hover:text-pink-500 transition">
            <FaSearch className="text-lg" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
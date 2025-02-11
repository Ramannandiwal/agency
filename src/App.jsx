import { useState } from "react";
import Slider from "./Component/Slider";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-purple-50 to-blue-400">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white md:px-10 lg:px-16">
        <h3 className="font-bold text-2xl md:text-3xl">AGENCY</h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 md:space-x-10 font-bold text-lg">
          <li>Why Us</li>
          <li>About</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Process</li>
          <li>Reviews</li>
          <li>Our Skills</li>
          <li>Contact Us</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white py-4 space-y-4 font-bold text-lg">
          <li>Why Us</li>
          <li>About</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Process</li>
          <li>Reviews</li>
          <li>Our Skills</li>
          <li>Contact Us</li>
        </ul>
      )}

      <Slider />
    </div>
  );
};

export default App;

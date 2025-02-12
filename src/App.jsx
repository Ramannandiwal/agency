import { useState } from "react";
import Slider from "./Component/Slider";
import { FaBook, FaBox, FaMobile, FaProcedures, FaRegLightbulb, FaRegThumbsUp } from "react-icons/fa";
import FeatureCard from "./Component/FeatureCard";
import { CiClock1 } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { FcOnlineSupport } from "react-icons/fc";
import ServiceCard from "./Component/ServiceCard";
import ProcessCard from "./Component/ProcessCard";
import { FaBarsProgress, FaMessage, FaPencil } from "react-icons/fa6";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-purple-50 to-blue-400">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md md:px-10 lg:px-16">
        <h3 className="font-bold text-2xl md:text-3xl">AGENCY</h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 font-semibold text-lg">
          {["Why Us", "About", "Service", "Portfolio", "Process", "Reviews", "Our Skills", "Contact Us"].map(
            (item) => (
              <li key={item} className="hover:text-blue-600 cursor-pointer transition">
                {item}
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col absolute top-16 left-0 w-full bg-white py-4 space-y-3 font-semibold text-lg shadow-lg z-50">
          {["Why Us", "About", "Service", "Portfolio", "Process", "Reviews", "Our Skills", "Contact Us"].map(
            (item) => (
              <li key={item} className="hover:text-blue-600 cursor-pointer text-center py-2">
                {item}
              </li>
            )
          )}
        </ul>
      )}

      {/* Slider */}
      <div className="w-full">
        <Slider />
      </div>

      {/* Our Advantages Section */}
      <div className="min-h-[50vh] bg-white p-6 md:p-10">
        <div className="text-center">
          <h1 className="font-bold text-4xl md:text-6xl">OUR <span className="text-[#668e18]">ADVANTAGES</span></h1>
        </div>
        <p className="text-center text-gray-600 px-4 md:px-16 lg:px-32 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 md:p-10">
          <FeatureCard title="INNOVATION" Icon={FaRegLightbulb} />
          <FeatureCard title="QUALITY" Icon={FaRegThumbsUp} />
          <FeatureCard title="EXPERIENCE" Icon={CiClock1} />
          <FeatureCard title="HAPPY CLIENT" Icon={IoIosPeople} />
          <FeatureCard title="SUPPORT" Icon={FcOnlineSupport} />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#f2f2f2] p-6 md:p-10 space-y-8">
        <div className="text-center">
          <h1 className="font-bold text-4xl md:text-6xl">OUR <span className="text-[#668e18]">SERVICES</span></h1>
        </div>
        <p className="text-center text-gray-600 px-4 sm:px-10 md:px-16 lg:px-32">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-12">
          {["WEB DESIGN", "GRAPHIC DESIGN", "BRANDING", "MARKETING"].map((service) => (
            <ServiceCard key={service} title={service} />
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-black p-4">
        <div className="text-center">
          <h1 className="font-bold text-white text-4xl md:text-6xl">OUR <span className="text-[#668e18]">PORTFOLIO</span></h1>
        </div>
        <p className="text-center text-xs px-4 sm:px-10 md:px-16 text-white lg:px-32">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nemo neque eligendi, doloremque quam repellendus. Reprehenderit expedita neque repellat et!
        </p>

        {/* Portfolio Categories */}
        <ul className="text-2xl flex flex-wrap justify-center text-white space-x-5 p-3">
          {["WEB DESIGN", "GRAPHIC DESIGN", "BRANDING", "LOGO", "MARKETING", "ADVERTISEMENT"].map(
            (category, index) => (
              <li key={index} className={`${category === "LOGO" ? "text-orange-500" : ""} cursor-pointer`}>
                {category}
              </li>
            )
          )}
        </ul>

        {/* Portfolio Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-3">
          {[
            "horse.png",
            "tree.png",
            "brain.png",
            "succe.png",
            "rhino.png",
            "Growt.png",
            "Brainworkd.png",
            "LIonGropu.png",
            "GrowthPlcaceTaling.png",
            "SocialGrapuagline.png",
          ].map((img, index) => (
            <img key={index} className="w-full h-auto rounded-lg shadow-md" src={`/os/${img}`} alt={img} />
          ))}
        </div>
      </div>
      <div className=" bg-white h-[60vh] flex flex-col">
      <div className="text-center p-4">
          <h1 className="font-bold text-black text-4xl md:text-6xl">OUR <span className="text-[#668e18]">PROCESS</span></h1>
        </div>
        <p className=" p-4 text-center text-xs px-4 sm:px-10 md:px-16 text-black lg:px-32">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nemo neque eligendi, doloremque quam repellendus. Reprehenderit expedita neque repellat et!
        </p>
        <div className=" md:flex   ">
 
  

        <ProcessCard number={1} title="Request Call" Icon={FaMobile}/>
        <ProcessCard number={2} title="Consultation" Icon={FaMessage}/>
        <ProcessCard number={3} title="Planning" Icon={FaBook}/>
        <ProcessCard number={4} title="Work Process" Icon={FaProcedures}/>
        <ProcessCard number={5} title="Correcting" Icon={FaPencil}/>
        <ProcessCard number={6} title="Deliver" Icon={FaBox}/>
        </div>
      </div>
    </div>
  );
};

export default App;

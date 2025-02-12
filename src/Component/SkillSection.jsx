import React from "react";

const SkillsSection = () => {
  return (
    <div className="bg-white py-12">
      {/* Title */}
      <div className="text-center px-4">
        <h1 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          OUR <span className="text-[#668e18]">SKILLS</span>
        </h1>
      </div>

      {/* Description */}
      <p className="p-4 text-center text-sm sm:text-base md:text-lg text-black max-w-4xl mx-auto leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br className="hidden sm:block" />
        Nam nemo neque eligendi, doloremque quam repellendus. Reprehenderit expedita neque repellat et!
      </p>

      {/* Skills Images Grid */}
      <div className="flex flex-wrap justify-center items-center gap-6 px-4 mt-6">
        {/* Use relative paths for public assets */}
        {[1, 2, 3, 4].map((num) => (
          <img
            key={num}
            src={`/skills/${num}.png`} // ✅ Public path corrected
            alt={`Skill ${num}`}
            className="w-60 sm:w-60 md:w-60 lg:w-60 object-contain transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

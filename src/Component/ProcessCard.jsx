import React from "react";
import { FaMobile } from "react-icons/fa";

const ProcessCard = ({ number = 1, title = "Request Call" ,Icon=FaMobile }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      {/* Circle Container */}
      <div className="relative flex items-center justify-center bg-white border-4 border-gray-300 shadow-lg h-36 w-36 sm:h-40 sm:w-40 rounded-full">
        {/* Number Badge */}
        <div className=" text-black absolute top-[-20px] sm:top-[-20x] left-1/2 transform -translate-x-1/2 bg-yellow-500  font-bold text-lg sm:text-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-md">
          {number}
        </div>

        {/* Icon */}
        <Icon color="#8ec63f" className=" text-5xl sm:text-6xl" />
      </div>

      {/* Title */}
      <h1 className="mt-4 text-lg sm:text-xl font-bold text-gray-900">
        {title.toUpperCase()}
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base px-4 sm:px-6 mt-2 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magnam!
      </p>
    </div>
  );
};

export default ProcessCard;

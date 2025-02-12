import React from "react";
import { FaUser } from "react-icons/fa6"; // FaPerson replaced with FaUser for better compatibility

const FeedbackCard = ({ title = "Raman" }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left bg-white p-6 sm:p-8 shadow-lg rounded-lg max-w-2xl mx-auto gap-6">
      {/* Avatar Section */}
      <div className="flex min-w-36 min-h-36 rounded-[50%]  items-center justify-center bg-gray-500  shadow-md">
        <FaUser className="text-white text-4xl sm:text-5xl" />
      </div>

      {/* Text Content */}
      <div>
        {/* Name Title */}
        <p className="text-lg sm:text-xl font-bold text-gray-900">{title.toUpperCase()}</p>

        {/* Feedback Text */}
        <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, in libero earum minus nesciunt recusandae non, 
          sapiente accusamus, praesentium modi tenetur sunt eveniet ipsa amet. Molestias aperiam est nam dolorem.
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;

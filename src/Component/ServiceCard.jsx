import React from 'react';
import { FaStar } from 'react-icons/fa';

const ServiceCard = ({ title = "Ram" }) => {
  return (
    <div className="relative space-y-6 bg-white shadow-lg rounded-lg flex flex-col text-center items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md p-6 py-12 mx-auto">
      {/* Floating Star Icon */}
      <div className="absolute top-[-30px] flex items-center justify-center w-16 h-16 bg-yellow-300 rounded-full border-4 border-white shadow-md">
        <FaStar size={32} className="text-red-600" />
      </div>

      <h1 className="text-2xl font-bold mt-8">{title.toUpperCase()}</h1>
      <p className="text-gray-700 px-4">
        Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Vero rem aliquid necessitatibus.
      </p>
      <a className='text-[#678e19] underline' href="#">read more</a>
    </div>
  );
};

export default ServiceCard;

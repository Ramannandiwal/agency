import React from "react";

const FeatureCard = ({ title, Icon }) => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex items-center justify-center h-[30vh] bg-[#f2f2f2] rounded-[50%] w-[30vh]">
        <Icon size={120} />
      </div>
      <h1 className="p-3 font-bold text-center text-2xl">{title}</h1>
      <p>
        Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit <br /> Fugiat, totam?
      </p>
    </div>
  );
};

export default FeatureCard;

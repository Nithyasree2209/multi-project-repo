import React from "react";

interface CardProps {
  imageSrc: string;
  description: string;
}

const Cardd: React.FC<CardProps> = ({ imageSrc, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
      <img className="rounded-t-lg" src={imageSrc} alt="Image" />
      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Cardd;

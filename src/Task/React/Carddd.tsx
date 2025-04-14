import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (<>
  <div className="d-flex inline-block gap-4 ml-13 mt-10">
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-sm text-white ">
      <div className="p-5">
        <h5 className="mb-2 text-2xl d-flex justify-center font-bold">{title}</h5>
        <p className="mb-3 font-normal">{description}</p>
      </div>
    </div>
    </div>
    </>
  );
};

export default Card;

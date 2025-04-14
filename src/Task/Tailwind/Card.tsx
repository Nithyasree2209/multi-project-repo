import React from "react";

type ProfileCardProps = {
  name: string;
  role: string;
  imageUrl: string;
};

const Cardddd: React.FC<ProfileCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="w-70 max-w-sm border border-black-200 mt-10 ml-10 rounded-lg shadow-sm bg-purple-900 inline-block grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg mt-10"
          src={imageUrl}
          alt={`${name} profile`}
        />
        <h5 className="mb-1 text-xl font-medium text-white">
          {name}
        </h5>
        <span className="text-sm text-white font-light ">{role}</span>
      </div>
    </div>
  );
};

export default Cardddd;

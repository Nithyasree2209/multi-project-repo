import React from "react";

interface ImageCardProps {
  imageSrc: string;
}

const Image: React.FC<ImageCardProps> = ({ imageSrc }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm w-full h-full overflow-hidden d-flex inline-block ml-15 mt-20">
      <img className="rounded-lg" src={imageSrc} alt="Image" />
    </div>
  );
};

export default Image;

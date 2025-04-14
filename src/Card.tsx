import React from 'react';

// Define the props type for the Card component
interface CardProps {
  title: string;
  image: string; 
  description: string;
  buttonText: string;
  buttonLink: string;
  // Optional props for dynamic styling
  bgColor?: string;
  textColor?: string;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  image,
  description, 
  buttonText, 
  buttonLink, 
  bgColor = 'bg-white', 
  textColor = 'text-gray-900' 
}) => {
  return (
    <div className={`max-w-sm p-6 ${bgColor} border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700`}>
     <a href={buttonLink}>
        <h5 className={`mb-2 text-2xl font-bold tracking-tight ${textColor} dark:text-white`}>{title}</h5>
      </a>
     
      {/* Image section */}
      <img src={image} alt={title} className="w-full h-80 object-cover rounded-t-lg mb-4" />
      
      
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <a
        href={buttonLink}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {buttonText}
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

export default Card;

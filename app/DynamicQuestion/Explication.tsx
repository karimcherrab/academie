import React from 'react';

const Explication = ({ title, explication, imgSrc, text_btn ,setStep , step}) => {
  return (
    <div className="flex flex-col items-center justify-center px-4  bg-white">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-4">
        {title}
      </h1>

      {/* Subheading */}
      <p className="text-base md:text-lg text-center text-gray-700 max-w-xl mb-6">
        {explication}
      </p>

      {/* Image */}
      <div className="w-64 h-64 flex items-center justify-center bg-blue-50 rounded-full mb-8">
        <img src={imgSrc} alt="illustration" className="w-40 h-40 object-contain" />
      </div>

      {/* Continue Button */}
      <button className="bg-blue-600 text-white font-semibold text-lg rounded-md px-6 py-3 w-full max-w-xs hover:bg-blue-700 transition duration-300"
        onClick={()=>{setStep(step+1)}}
      
      >
        {text_btn}
      </button>
    </div>
  );
};

export default Explication;

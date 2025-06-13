import React from 'react';

const AgeCard = ({ label, imgSrc , setStep , setSteps , steps}) => {

const handleSuggestionClick = (index, suggestionLabel) => {
  setSteps(prev =>
    prev.map((item, i) =>
      i === index ? { ...item, answer: suggestionLabel } : item
    )
  );
};

  return (
    <div className="rounded-xl border border-gray-300 shadow-md overflow-hidden"
      onClick={()=>{
        setStep(1)
      
      handleSuggestionClick(0 ,label )
      console.log(steps)
      }}
    >
      <img src={imgSrc} alt={label} className="w-full h-48   p-6" />
      <div className="bg-blue-600 text-white text-center py-3 text-lg font-bold">
        {label} →
      </div>
    </div>
  );
};

export default AgeCard;

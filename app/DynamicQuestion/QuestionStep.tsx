import React from "react";

export default function QuestionStep({ title, question, suggestions, onSelect ,imgSrc}) {
  return (
    <div className="text-center space-y-6    w-full flex flex-col justify-between">
      {/* Title */}
      <div className=" flex flex-col gap-4 justify-center items-center">
         <h3 className="text-sm text-gray-600 font-medium">{title}</h3>
      
         <h2 className="text-xl md:text-2xl font-bold text-blue-900">{question}</h2>
          {imgSrc!==null && <div className="w-64 h-64 flex items-center justify-center bg-blue-50 rounded-full mb-8">
        <img src={imgSrc} alt="illustration" className="w-40 h-40 object-contain" />
      </div>

          }
            
      </div>
   

      {/* Suggestions */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto w-full">
        {suggestions.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option.label)}
            className="flex items-center justify-center px-4 py-3 rounded-xl shadow-sm bg-gray-50 hover:bg-gray-100 transition"
          >
            <span
              className={`text-2xl mr-2 ${
                option.color === "green"
                  ? "text-green-600"
                  : option.color === "red"
                  ? "text-red-600"
                  : ""
              }`}
            >
              {option.icon}
            </span>
            <span className="text-lg font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

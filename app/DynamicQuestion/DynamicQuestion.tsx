import React from 'react';

const DynamicQuestion = ({  title, question, options, onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center  px-4 bg-white">
     


      {/* Step Title */}
      <p className="text-gray-600 text-sm mb-2">{title}</p>

      {/* Main Question */}
      <h1 className="text-2xl font-bold text-blue-900 mb-8 text-center">
        {question}
      </h1>

      {/* Options */}
      <div className="space-y-4 w-full max-w-sm">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className="w-full py-3 rounded-xl text-lg font-medium bg-blue-50 hover:bg-blue-100 border border-gray-200 flex items-center justify-center"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DynamicQuestion;

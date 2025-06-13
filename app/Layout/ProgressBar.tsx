import React from 'react'

const ProgressBar = ({step = 1, totalSteps = 5}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
             <div className=" flex items-center justify-center w-full max-w-md mb-6">
  {Array.from({ length: totalSteps }).map((_, index) => (
    <React.Fragment key={index}>
      {/* Circle */}
      <div
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
          index < step ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'
        }`}
      >
        {index < step ? (
          <span className="text-white text-xs">✓</span> // You can use number if you prefer
        ) : null}
      </div>

      {/* Line between steps */}
      {index < totalSteps - 1 && (
        <div
          className={`flex-1 h-0.5 ${
            index < step - 1 ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        ></div>
      )}
    </React.Fragment>
  ))}
</div>
    </div>
   
  )
}

export default ProgressBar
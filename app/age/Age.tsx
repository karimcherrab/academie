import React from 'react'
import AgeCard from './AgeCard';
import age56 from "../assets/age56.png"
import age7plus from "../assets/age7plus.png"

const Age = ({setStep , setSteps , steps}) => {
   return (
    <div className=" bg-white flex flex-col items-center justify-center p-4 space-y-10">
      <div className="flex items-center space-x-3">
        <h1 className="text-3xl font-bold text-center text-blue-900">
          كم عمر طفلك؟
        </h1>
      </div>
      <div className="grid grid-cols-2  gap-6 w-full  max-w-xl">
        <AgeCard label="سنوات 5-6" imgSrc={age56} setStep={setStep}  setSteps={setSteps} steps={steps}/>
        <AgeCard label="7 سنوات فما فوق" imgSrc={age7plus} setStep={setStep}   setSteps={setSteps} steps={steps} />
      </div>
    </div>
  );
}

export default Age
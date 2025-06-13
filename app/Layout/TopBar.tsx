import React from 'react';
import logo from "../assets/logo.png";

const TopBar = ({ setStep, step }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex w-full items-center justify-between px-4'>
        {/* Bouton Back à gauche */}
        {step !== 0 ? (
          <button
            onClick={() => { setStep(step - 1) }}
            className="text-blue-600 font-semibold hover:underline"
            aria-label="Retour"
          >
            ← رجوع
          </button>
        ) : (
          <div style={{ width: '1rem' }} />
        )}

        {/* Logo et titre centrés */}
        <div className='flex items-center justify-center space-x-2'>
          <img src={logo} className="w-8 h-8 m-2" alt="logo" />
          <p>الجيل الذهبي</p>
        </div>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/cherrab-mohamed-abdelkarim-98a0a4268" // 🔁 replace with your actual LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          Created by cherrab karim
        </a>
      </div>

      <div className='h-[1px] bg-gray-400 w-full' />
    </div>
  );
};

export default TopBar;

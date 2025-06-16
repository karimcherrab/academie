import React from 'react';
import logo from "../assets/logo.png";

const TopBar = ({ setStep, step }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col sm:flex-row w-full items-center justify-between px-4 py-2 gap-2 sm:gap-0">
        {/* Bouton Back à gauche */}
        {step !== 0 ? (
          <button
            onClick={() => { setStep(step - 1) }}
            className="text-blue-600 font-semibold hover:underline order-1 sm:order-none"
            aria-label="Retour"
          >
            ← رجوع
          </button>
        ) : (
          <div className="w-[3rem] order-1 sm:order-none" />
        )}

        {/* Logo et titre centrés */}
        <div className="flex items-center justify-center gap-2 order-0 sm:order-none">
          <img src={logo} className="w-8 h-8" alt="logo" />
          <p className="text-center text-base font-semibold">الجيل الذهبي</p>
        </div>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/cherrab-mohamed-abdelkarim-98a0a4268"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline order-2 sm:order-none"
        >
          Created by cherrab karim
        </a>
      </div>

      <div className="h-[1px] bg-gray-400 w-full" />
    </div>
  );
};

export default TopBar;

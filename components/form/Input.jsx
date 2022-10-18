import React from "react";

const Input = ({iType,iLabel,iMin,touched,error,...inputProps}) => {

  return (
    <div className="w-full">
      <label className="relative block cursor-text">
        <input
          type={iType}
          min={iMin}
          required
          className={`h-14 w-full border border-primary outline-none rounded-md px-4 peer pt-2 ${touched && error ? 'border-red-500': 'border-primary'}`}
          {...inputProps}
        />
        <span className="absolute items-center top-0 left-0 text-sm flex h-full px-4 peer-focus:h-6 peer-focus:text-xs peer-valid:h-6 peer-valid:text-xs transition-all text-gray-500">
          {iLabel}
        </span>
        
      </label>
      {
        touched && <small className="text-red-500">{error}</small>
      }
    </div>
  );
};

export default Input;

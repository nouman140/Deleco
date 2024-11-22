import React from 'react';
import Dropdown from '../Dropdown';

export const HeaderGreen = ({ options, handleSelect }) => {
  return (
    <div className="py-4">
      <div className="container mx-auto px-[20px]">
        <div className="flex justify-between">
          <div className="logo">
            <img src="/assets/Logo (2).svg" width={141} height={37} alt="" />
          </div>
          <div className="dropdown">
            <Dropdown options={options} onSelect={handleSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

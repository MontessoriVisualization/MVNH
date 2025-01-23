import React from "react";

const CircularCheckbox: React.FC = () => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="w-6 h-6 rounded-full border-2 border-gray-500 appearance-none cursor-pointer checked:bg-gray-500 checked:border-transparent checked:focus:ring-0"
      />
      <span className="peer-checked:text-gray-500">Check me</span>
    </label>
  );
};

export default CircularCheckbox;

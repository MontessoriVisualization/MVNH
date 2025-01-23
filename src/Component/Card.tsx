import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  features: string[];
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, subtitle, features, icon }) => {
  return (
    <div className="bg-gray-200 text-black p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-icons">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-green-500">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;

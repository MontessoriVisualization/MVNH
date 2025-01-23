import React from "react";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
  subtitle: string;
}
const List: React.FC<CardProps> = ({ title, subtitle, icon, features }) => {
  return (
    <div>
      <div>
        <div>{icon}</div>
        <div>
          <div>{title}</div>
          <div>{subtitle}</div>
        </div>
      </div>
      <div>
        <ul>
          {features.map((features, index) => (
            <li key={index}>
              <span>✔</span>
              <span>{features}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default List;

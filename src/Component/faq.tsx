import { ChevronDown } from "lucide-react";
import React from "react";

interface FaqProps {
  index: number;
  title: string;
  subtitle: string;
  isVisible: boolean;
  onClick: () => void;
}

const Faq: React.FC<FaqProps> = ({
  title,
  subtitle,
  index,
  isVisible,
  onClick,
}) => {
  return (
    <div className="">
      <div
        className="flex p-6 items-center justify-between border cursor-pointer"
        onClick={onClick}
      >
        <div className="flex text-lg font-bold">
          {index}. {title}
        </div>
        <ChevronDown
          size={24}
          className={`transform transition-transform ${
            isVisible ? "rotate-180" : ""
          }`}
        />
      </div>
      <div className={`p-6 ${isVisible ? "block" : "hidden"}`}>{subtitle}</div>
    </div>
  );
};

export default Faq;

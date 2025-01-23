import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./button"; // Adjust the import path as necessary

interface CategoriesProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
  colors: string;
}
const List: React.FC<CategoriesProps> = ({ title, icon, features, colors }) => {
  return (
    <div className="flex items-center justify-between border m-4">
      <div>
        <div className="text-2xl font-bold my-3">{title}</div>
        <div className="grid grid-cols-3 my-3">
          {features.map((feature, index) => (
            <button
              key={index}
              className="px-2 py-1 my-2 rounded-3xl border mr-3 "
            >
              <span>{feature}</span>
            </button>
          ))}
        </div>
        <div>
          <Button variant={"ghost"} className="flex border-0">
            Export Category <ArrowRight />
          </Button>
        </div>
      </div>
      <div
        className={`flex justify-center items-center aspect-[1/2] h-full rounded-tl-full rounded-bl-full  fill-orange-500 ${colors}`}
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: "text-orange-500",
        })}
      </div>
    </div>
  );
};

export default List;

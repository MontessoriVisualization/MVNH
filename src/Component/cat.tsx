import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./button";
import { Link } from "react-router-dom";

interface CategoriesProps {
  inde: string;
  title: string;
  icon: React.ReactNode;
  features: {
    name: string;
    link: string;
  }[];
  colors: string;
}
const List: React.FC<CategoriesProps> = ({
  title,
  icon,
  features,
  colors,
  inde,
}) => {
  return (
    <div className="flex items-center justify-between border py-4 pl-2 md:4 rounded-xl  m-4">
      <div>
        <div className="text-2xl font-bold my-3">{title}</div>
        <div className="grid xl:grid-cols-3 grid-cols-2 pl-3 my-3">
          {features.map((feature, index) => (
            <Link to={`${feature.link}`} key={index}>
              <button
                key={index}
                className="px-2  py-1 my-2 rounded-3xl border mr-3 "
              >
                <span className="text-sm md:text-base">{feature.name} </span>
              </button>
            </Link>
          ))}
        </div>
        <div>
          <Link to={`${inde}`}>
            <Button variant={"ghost"} className="flex border-0">
              Export Category <ArrowRight />
            </Button>
          </Link>
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

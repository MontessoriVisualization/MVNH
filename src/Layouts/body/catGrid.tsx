import React from "react";
import Cat from "../../Component/cat";
import { BookMarkedIcon, CalendarDays, NotebookPenIcon } from "lucide-react";

const CatData = [
  {
    title: "Class 11",
    features: ["Physics", "Chemistry", "Biology", "Computer"],
    icon: <CalendarDays />,
    colors: "bg-blue-100",
  },
  {
    title: "Class 12",
    features: ["Physics", "Chemistry", "Biology", "Computer"],
    icon: <NotebookPenIcon />,
    colors: "bg-green-100",
  },
  {
    title: "Past Year Question",
    features: ["class11", "class12"],
    icon: <BookMarkedIcon />,
    colors: "bg-red-100",
  },
];

const CatGrid: React.FC = () => {
  console.log("Rendering CatGrid with data:", CatData);

  return (
    <div className="container mx-auto m-7 my-16 ">
      <div className="text-center mb-9">
        <h2 className="text-3xl font-bold my-2">
          Notes And Question Bank Catagories
        </h2>
        <p className="text-gray-400 text-lg">
          Best Free Collection Of Notes And Question Bank For Class 11 and 12 by
          MVNH
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3">
        {CatData.map((cat, index) => (
          <Cat
            key={index}
            title={cat.title}
            colors={cat.colors}
            features={cat.features}
            icon={cat.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CatGrid;

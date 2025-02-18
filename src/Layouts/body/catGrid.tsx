import React from "react";
import Cat from "../../Component/cat";
import { BookMarkedIcon, CalendarDays, NotebookPenIcon } from "lucide-react";

const CatData = [
  {
    title: "Class 11",
    features: [
      { name: "Physics", link: "/class11physic" },
      { name: "Chemistry", link: "/class11chemistry" },
      { name: "Biology", link: "/class11biology" },
      { name: "Computer", link: "/class11computer" },
    ],
    icon: <CalendarDays />,
    colors: "bg-blue-100",
    inde: 11,
  },
  {
    title: "Class 12",
    features: [
      { name: "Physics", link: "/class12physics" },
      { name: "Chemistry", link: "/class12chemistry" },
      { name: "Biology", link: "/class12biology" },
      { name: "Computer", link: "/class12computer" },
    ],
    icon: <NotebookPenIcon />,
    colors: "bg-green-100",
    inde: 12,
  },
  {
    title: "Past Year Question",
    features: [
      { name: "Class 11", link: "/class11question" },
      { name: "Class 12", link: "/class12question" },
    ],
    icon: <BookMarkedIcon />,
    colors: "bg-red-100",
    inde: 13,
  },
];

const CatGrid: React.FC = () => {
  console.log("Rendering CatGrid with data:", CatData);

  return (
    <div className="mx-auto px-7 my-16 ">
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
            inde={cat.inde}
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

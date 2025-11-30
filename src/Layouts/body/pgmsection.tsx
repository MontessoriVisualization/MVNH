import React from "react";
import Cat from "../../Component/cat";
import { FaGlobe, FaLaptopCode, FaPython, FaReact, FaSitemap } from "react-icons/fa";

type Feature = { name: string; link: string };
type Card = {
  title: string;
  subtitle?: string;
  features: Feature[];
  icon: React.ReactNode;
  colors: string;
  inde: string;
};

const programmingCards: Card[] = [
  {
    title: "HTML , CSS & JS",
    subtitle: "Build beautiful websites from scratch with interactive features",
    features: [
   
    ],
    icon: <FaGlobe />,
    colors: "bg-orange-100",
    inde: 'fos',
  },
  
  {
    title: "C Programming",
    subtitle: "Master the fundamentals of programming",
    features: [
  
    ],
    icon: <FaLaptopCode />,
    colors: "bg-purple-100",
    inde: "tos",
  },
  {
    title: "Python",
    subtitle: "Begin your coding journey",
    features: [
    
    ],
    icon: <FaPython />,
    colors: "bg-blue-100",
    inde: "python",
  },
  {
    title: "React",
    subtitle: "Build modern web applications",
    features: [
    
    ],
    icon: <FaReact />,
    colors: "bg-indigo-100",
    inde: "react",
  },
  {
    title: "Data Structures",
    subtitle: "Essential CS fundamentals",
    features: [
     
    ],
    icon: <FaSitemap />,
    colors: "bg-green-100",
    inde: "datastructures",
  },
];

const PgmSection: React.FC = () => {
  return (
    <div className="mx-auto px-7 my-16">
      <div className="text-center mb-9">
        <h2 className="text-3xl font-bold my-2">Programming & Development</h2>
        <p className="text-gray-400 text-lg">
          Master coding skills with our comprehensive programming tutorials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3">
        {programmingCards.map((card, idx) => (
          <Cat
            key={idx}
            inde={card.inde}
            title={card.title}
            colors={card.colors}
            features={card.features}
            icon={card.icon}
            // subtitle removed to match CategoriesProps
          />
        ))}
      </div>

   
    </div>
  );
};

export default PgmSection;
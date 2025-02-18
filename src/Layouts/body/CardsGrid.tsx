import React from "react";
import Card from "../../Component/Card";
import {
  FileDownIcon,
  LightbulbIcon,
  MessageSquare,
  StickyNote,
} from "lucide-react";

const cardsData = [
  {
    title: "Homework Help",
    subtitle: "Sign in to unlock ths feature",
    features: [
      "Ask question",
      "Create and join study groups",
      "Connect with like minded students",
      "Vibrant student community",
    ],
    icon: <MessageSquare />,
  },
  {
    title: "Download Features",
    subtitle: "Sign in to unlock ths feature",
    features: ["Adapted to your schedule"],
    icon: <FileDownIcon />,
  },
  {
    title: "Past Year Question",
    subtitle: "With step-by-step solutions",
    features: [
      "Past exams of 11 and 12",
      " With step-by-step solutions",
      "With highlights on the number of repeated questions",
    ],
    icon: <LightbulbIcon />,
  },
  {
    title: "Class Notes",
    subtitle: "NEB Class 11 and 12(Science)",
    features: ["Best notes of Both 11 and 12", "New notes uploaded daily"],
    icon: <StickyNote />,
  },
];

const CardsGrid: React.FC = () => {
  console.log("Rendering CardsGrid with data:", cardsData);

  return (
    <div className="mx-auto px-7 py-5 mb-9">
      <div className="text-center mb-9">
        <h2 className="text-3xl font-bold my-2">
          Our Features and upcomming features
        </h2>
        <p className="text-gray-400 text-base">
          MVNH privides you with tools to make your study easier by providing
          you with tool to prepare for your exams.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            features={card.features}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;

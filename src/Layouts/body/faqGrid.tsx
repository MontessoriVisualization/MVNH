import React, { useState } from "react";
import Faq from "../../Component/faq";

const FaqsData = [
  {
    title: "What does MVNH stand for?",
    subtitle:
      "MVNH stands for Montessori Visualization NEB Hub. It is a project done By Montessori Visualization a club.",
  },
  {
    title: "What new feature will be added in future?",
    subtitle:
      "We are currently working on projects like Chat features, Engineering and Medical based Mock Test.",
  },
  {
    title: "How can I contribute to MVNH?",
    subtitle:
      "Currently You can contribute by sending the material with your name and class to our email.montessorivisualization@gmail.com",
  },
  {
    title: "How can I join Montessori Visualization?",
    subtitle:
      "If you have impressive skills in any computer field you can join us and contribute to our project.",
  },
  {
    title: "What does MVNH stand for?",
    subtitle:
      "MVNH stands for Montessori Visualization NEB Hub. It is a project done By Montessori Visualization a club.",
  },
  {
    title: "What new feature will be added in future?",
    subtitle:
      "We are currently working on projects like Chat features, Engineering and Medical based Mock Test.",
  },
];

const FaqGrid: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="mx-auto m-7 my-16">
      <div className="p-7 text-3xl font-bold border-l-8 border-orange-500 bg-orange-100">
        Frequently Asked Questions
      </div>
      {FaqsData.map((faq, index) => (
        <Faq
          key={index}
          title={faq.title}
          subtitle={faq.subtitle}
          index={index + 1}
          isVisible={visibleIndex === index}
          onClick={() => handleFaqClick(index)}
        />
      ))}
    </div>
  );
};

export default FaqGrid;

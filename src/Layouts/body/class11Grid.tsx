import React, { useState } from "react";
import Classes from "../../Component/classes";

const ClassessData = [
  {
    topic: "Algebra",
    subtopic: [
      "Permutation and Combination",
      "Binomial Theorem",
      "Complex Numbers",
      "Sequence and Series",
      "Matrix based System of Linear Equations",
    ],
  },
  {
    topic: "Trigonometry",
    subtopic: ["Properties of Triangle", "Solution of Trangle"],
  },
  {
    topic: "Alalytic Geometry",
    subtopic: ["Conic Sections"],
  },
  {
    topic: "Vector",
    subtopic: ["Product of Vectors"],
  },
  {
    topic: "Statistics and Probability",
    subtopic: ["Correlation", "Probability"],
  },
  {
    topic: "Calculus",
    subtopic: [
      "Derivatives",
      "Application of Derivatives",
      "AntiDerivatives",
      "Differential Equations",
    ],
  },
  {
    topic: "Computational Methods",
    subtopic: ["System of Linear Equations", "Linear Programming"],
  },
];

const ClassesGrid: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const handleClassesClick = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="mx-14">
      <div className="p-7 text-3xl border-l-8 border-orange-500 bg-orange-100">
        NEB Class 12 Mathmethics Notes OF All Chapter{" "}
      </div>
      {ClassessData.map((ClassesProps, index) => (
        <Classes
          key={index}
          topic={ClassesProps.topic}
          subtopic={ClassesProps.subtopic}
          index={index + 1}
          isVisible={visibleIndex === index}
          onClick={() => handleClassesClick(index)}
        />
      ))}
    </div>
  );
};

export default ClassesGrid;

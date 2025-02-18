import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "../../../Component/classes";
import Math11 from "./Maths11.png";

interface ClassData {
  ClassLink: string;
  Class: string;
  title: string;
  writer: string;
  Links: string[][];

  chapters: string[];
  icon: React.ReactNode;
  sub: string[][];
  picture: string;
  pageno: string[][];
}

const classData: ClassData = {
  Class: "class11",
  ClassLink: "/class11",
  Links: [
    [
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
    ],
    [
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
    ],
    [
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
    ],
    [
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
    ],
  ],
  title: "Basic Mathematics Class11",
  writer:
    "A comprehensive note of basic mathematics for class 11 students by MVNH",
  chapters: [
    "Algebra",
    "Trigonometry",
    "Analytic Geometry",
    "Vectors",
    "Statistics and Probability",
    "Calculus",
    "Computational Methods",
    "Mechanics",
  ],
  icon: <BookMarkedIcon className=" size-fit" />,
  sub: [
    [
      "Logic, Sets and Real Number System",
      "Function",
      "Curve Sketching",
      "Sequence and Series",
      "Matrix and Determinants",
      "Quadratic Equations",
      "Complex Numbers",
    ],
    ["Inverse Circular Function and Trigonometric Equation"],
    ["Analytic Geometry", "Pair of Straight Lines", "Coordinates in Space"],
    ["Vectors"],
    ["Measures of Dispersion", "Probability"],
    [
      "Limits and Continuity",
      "The Derivatives",
      "Application of Derivatives",
      "Antiderivative",
    ],
    ["Numerical Computation", "Numerical Integration"],
    ["Statics", "Dynamics"],
  ],
  picture: Math11,
  pageno: [
    ["3", "25", "51", "68", "83", "95", "115"],
    ["101", "121"],
    ["145", "165", "185"],
    ["225"],
    ["245", "265"],
    ["285", "305", "325", "345"],
    ["345", "365"],
    ["385", "405"],
  ],
};

const Class11Maths: React.FC = () => {
  return (
    <Class
      Links={classData.Links}
      ClassLink={classData.ClassLink}
      Class={classData.Class}
      title={classData.title}
      sub={classData.sub}
      chapters={classData.chapters}
      icon={classData.icon}
      writer={classData.writer}
      pageno={classData.pageno}
      picture={classData.picture}
    />
  );
};

export default Class11Maths;

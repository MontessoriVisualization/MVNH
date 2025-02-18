import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "../../../Component/classes";
import Maths12 from "./Maths12.png";

const Example: React.FC = () => {
  const Classdata = {
    ClassLink: "/class12",

    Class: "class12",

    title: "Basic Mathematics Class12",
    writer:
      "A comprehensive note of basic mathematics for class 12 students by MVNH",
    chapters: [
      "Algebra",
      "Trigonometry",
      "Analytical Geometry",
      "Vector",
      "Statistics and Probability",
      "Calculus",
      "Computational Methods",
    ],
    icon: <BookMarkedIcon className="size-fit" />,
    Links: [
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
      [
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
      ],
    ],
    sub: [
      [
        "Permutation & Combination",
        "Binomial Theorem",
        "Complex Number",
        "Sequence and Series",
        "Matrix based System of Linear Equation",
      ],
      ["Properties of Triangle", "Solution of Triangle"],
      ["Circle", "Ellipse", "Parabola", "Hyperbola"],
      ["Product of Vector"],
      ["Correlation and Regression", "Probability"],
      ["Derivative", "Integration", "Differential Equation"],
      ["System of Linear Equation", "Linear Programming"],
    ],
    picture: Maths12,
    pageno: [
      ["3", "25", "51", "68", "83"],
      ["101", "121"],
      ["145", "165", "185", "205"],
      ["225"],
      ["245", "265"],
      ["285", "305", "325"],
      ["345", "365"],
    ],
  };

  return (
    <Class
      Links={Classdata.Links}
      ClassLink={Classdata.ClassLink}
      Class={Classdata.Class}
      title={Classdata.title}
      sub={Classdata.sub}
      chapters={Classdata.chapters}
      icon={Classdata.icon}
      writer={Classdata.writer}
      pageno={Classdata.pageno}
      picture={Classdata.picture}
    />
  );
};

export default Example;

import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "../../../Component/classes";
import Physics11 from "./Phsics11.png";

const Example: React.FC = () => {
  const Classdata = {
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
    title: "Physics 11",
    writer: "A comprehensive note of physics for class 11 students by MVNH",
    chapters: [
      "Mechanics",
      "Heat and Thermodynamics",
      "Optics",
      "Electricity",
      "Modern Physics",
    ],
    icon: <BookMarkedIcon className="size-fit" />,
    sub: [
      // Mechanics
      [
        "Physical Quantities",
        "Vectors",
        "Kinematics",
        "Dynamics",
        "Work, Energy, and Power",
        "Circular Motion",
        "Gravitation",
        "Elasticity",
      ],

      // Heat and Thermodynamics
      [
        "Heat and Temperature",
        "Thermal Expansion",
        "Quantity of Heat",
        "Rate of Heat Flow",
        "Ideal Gas",
      ],

      // Optics
      [
        "Reflection at Curved Mirror",
        "Refraction at Plane Surface",
        "Refraction Through Prisms",
        "Lenses",
        "Dispersion",
      ],

      // Electricity
      [
        "Electric Charges",
        "Electric Field",
        "Electric Potential and Energy",
        "Capacitor",
        "DC Circuit",
      ],

      // Modern Physics
      ["Nuclear Physics", "Solid", "Recent Trends in Physics"],
    ],
    picture: Physics11,
    pageno: [
      ["1-24", "35-68", "69-124"],
      ["126-154", "155-180"],
      [
        "181-204",
        "205-224",
        "225-248",
        "249-268",
        "269-276",
        "277-294",
        "295-310",
        "311-322",
      ],
      ["323-352", "353-364", "365-408", "409-424", "425-460", "461-492"],
      ["493-516", "517-540", "541-558", "559-594", "595-620", "621-632"],
    ],
  };

  return (
    <Class
      ClassLink={Classdata.ClassLink}
      Class={Classdata.Class}
      title={Classdata.title}
      sub={Classdata.sub}
      Links={Classdata.Links}
      chapters={Classdata.chapters}
      icon={Classdata.icon}
      writer={Classdata.writer}
      pageno={Classdata.pageno}
      picture={Classdata.picture}
    />
  );
};

export default Example;

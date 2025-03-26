import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "../../../Component/classes";
import Physics12 from "./physic12.png";

const Example: React.FC = () => {
  const Classdata = {
    Class: "class12",
    ClassLink: "/class12",

    title: "Physics 12",
    writer: "A comprehensive note of physics for class 12 students by MVNH",
    chapters: [
      "Mechanics",
      "Heat and Thermodynamics",
      "Wave and Optics",
      "Electricity and Magnetism",
      "Modern Physic",
    ],
    icon: <BookMarkedIcon className="size-fit" />,
    sub: [
      ["Rotational Dynamics", "Perodic Motion", "Fluid Statics"],
      ["First Law of Thermodynamics", "Second law of Thermodynamics"],
      [
        "Wave and Wave Motion",
        "Mechanical Wave",
        "Wave In Pipes And String",
        "Acoustic Phenomena",
        "Nature and Propagation of Light",
        "Interference",
        "Diffraction",
        "Polorization",
      ],
      [
        "Electrical Circuits",
        "Thermoelectric Effect",
        "Magnetic Feild",
        "Magnetic Properties of Material",
        "Electromagnetic Induction",
        "Alternatig Current",
      ],
      [
        "Electron",
        "Photon",
        "Semiconductor Devices",
        "Quantum Mechanics",
        "Radioactivity and Nuclear Rediation",
        "Recent Trends",
      ],
    ],
    picture: Physics12,
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

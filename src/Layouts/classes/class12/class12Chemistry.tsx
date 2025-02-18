import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "../../../Component/classes";
import Maths12 from "./Chemistry12.png";

const class12Chemistry: React.FC = () => {
  const Classdata = {
    ClassLink: "/class12",

    Class: "class12",

    title: "Basic Chemistry Class12",
    writer:
      "A comprehensive note of basic chemsitry for class 12 students by MVNH",
    chapters: [
      "Physical Chemistry",
      "Inorganic Chemistry",
      "Organic Chemistry",
      "Applied Chemistry",
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
    icon: <BookMarkedIcon className="size-fit" />,
    sub: [
      [
        "Volumetric Analysis",
        "Ionic Equilibrium",
        "Chemical Kinetics",
        "Thermodynamics",
        "Electrochemistry",
      ],

      ["Transition Metals", "Studies of Heavy Metals"],

      [
        "Haloalkanes",
        "Haloarenes",
        "Alcohol",
        "Phenols",
        "Ethers",
        "Aldehydes and Ketones",
        "Carboxylic Acid and its Derivatives",
        "Nitro Compounds",
        "Amines",
        "Organometallic Compounds",
      ],
      [
        "Chemistry in the service of mankind",
        "Cement",
        "Paper and Pulp",
        "Nuclear Chemistry and Applications of Radioactivity",
      ],
    ],

    picture: Maths12,
    pageno: [
      ["1-40", "41-88", "89-136", "137-184", "185-212"],
      ["213-224", "225-292"],
      [
        "293-320",
        "321-334",
        "335-364",
        "365-382",
        "383-396",
        "397-436",
        "437-484",
        "485-500",
        "501-534",
        "535-551",
      ],
      ["551-549", "579-592", "593-600", "601-614"],
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

export default class12Chemistry;

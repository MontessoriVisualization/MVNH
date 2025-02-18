import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "../../../Component/unclasses";
import Computer11 from "./Computer11.png";

const class11Computer: React.FC = () => {
  const Classdata = {
    ClassLink: "/class11",
    Class: "class11",
    Links: [
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
      "https://drive.google.com/file/d/1M5N9_h9KD7UmXC4Z7g1DPeJkmfGGDUNP/preview",
    ],

    title: "Computer Class11",
    writer: "A comprehensive note of Computer for class 11 students by MVNH",
    chapters: [
      {
        title: "Computer system",
      },
      {
        title: "Number System, Conversion and Boolean Logic",
      },
      {
        title: "Computer software and Operating System",
      },
      {
        title: "Application Package",
      },
      {
        title: "Programming Concepts and logics",
      },
      {
        title: "Web technology - I",
      },
      {
        title: "Multimedia",
      },
      {
        title: "Information Security and Cyber Law",
      },
    ],
    icon: <BookMarkedIcon className="size-fit" />,
    picture: Computer11,
  };

  return (
    <Class
      ClassLink={Classdata.ClassLink}
      Class={Classdata.Class}
      title={Classdata.title}
      chapters={Classdata.chapters}
      icon={Classdata.icon}
      writer={Classdata.writer}
      picture={Classdata.picture}
      Links={Classdata.Links}
    />
  );
};

export default class11Computer;

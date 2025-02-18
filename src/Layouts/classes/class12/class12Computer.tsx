import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "../../../Component/unclasses";
import Maths12 from "./computer12.png";

const class12Computer: React.FC = () => {
  const Classdata = {
    Class: "class12",
    ClassLink: "/class12",
    title: "Computer Class12",
    Links: [
      "https://drive.google.com/file/d/1o4gssCXW3kZIsxV099TVhgAQtTiSEhR2/preview",
      "https://drive.google.com/file/d/1o4gssCXW3kZIsxV099TVhgAQtTiSEhR2/preview",
      "https://drive.google.com/file/d/1o4gssCXW3kZIsxV099TVhgAQtTiSEhR2/preview",
      "https://drive.google.com/file/d/1o4gssCXW3kZIsxV099TVhgAQtTiSEhR2/preview",
      "https://drive.google.com/file/d/1o4gssCXW3kZIsxV099TVhgAQtTiSEhR2/preview",
    ],
    writer: "A comprehensive note of Computer for class 12 students by MVNH",
    chapters: [
      {
        title: "Database",
      },
      {
        title: "Networking",
      },
      {
        title: "Web Technology II",
      },
      {
        title: "Programming in C",
      },
      {
        title: "Object Oriented Programming",
      },
      {
        title: "Software process model",
      },
      {
        title: "Recent trends in Technology",
      },
    ],
    icon: <BookMarkedIcon className="size-fit" />,
    picture: Maths12,
  };

  return (
    <Class
      Links={Classdata.Links}
      ClassLink={Classdata.ClassLink}
      Class={Classdata.Class}
      title={Classdata.title}
      chapters={Classdata.chapters}
      icon={Classdata.icon}
      writer={Classdata.writer}
      picture={Classdata.picture}
    />
  );
};

export default class12Computer;

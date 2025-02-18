import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "../../../Component/unclasses";
import Class12 from "./class12.png";

const Class12grid: React.FC = () => {
  const Classdata = {
    ClassLink: "/class12",
    Class: "class12",
    title: "",
    Links: [""],
    writer: "A comprehensive note for class 12 students by MVNH",
    chapters: [
      {
        title: "Physics",
        link: "/class12physics",
      },
      {
        title: "Chemistry",
        link: "/class12chemistry",
      },
      {
        title: "Maths",
        link: "/class12maths",
      },
      {
        title: "Biology",
        link: "/class12biology",
      },
      {
        title: "Computer Science",
        link: "/class12computer",
      },
    ],

    icon: <BookMarkedIcon className="size-7" />,
    picture: Class12,
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

export default Class12grid;

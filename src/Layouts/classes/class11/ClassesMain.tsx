import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "../../../Component/unclasses";
import Class11 from "./class11.png";

const class12Chemistry: React.FC = () => {
  const Classdata = {
    Class: "class11",
    ClassLink: "/class11",

    title: "",
    writer: "A comprehensive note of Computer for class 11 students by MVNH",
    Links: [],
    chapters: [
      {
        title: "Physics",
        link: "/class11physic",
      },
      {
        title: "Chemistry",
        link: "/class11chemistry",
      },
      {
        title: "Maths",
        link: "/class11maths",
      },
      {
        title: "Biology",
        link: "/class11biology",
      },
      {
        title: "Computer Science",
        link: "/class11computer",
      },
    ],
    icon: <BookMarkedIcon className="size-7" />,

    picture: Class11,
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

export default class12Chemistry;

import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "./../../Component/classes";
import Maths12 from "./computer12.png";

const class12Chemistry: React.FC = () => {
  const Classdata = {
    title: "Computer Class11",
    writer: "A comprehensive note of Computer for class 11 students by MVNH",
    chapters: [
      "Computer system",
      "Number System, Conversion and Boolean Logic",
      "Computer software and Operating System",
      "Application Package",
      "Programming Concepts and logics",
      "Web technology - I",
      "Multimedia",
      "Information Security and Cyber Law",
    ],
    icon: <BookMarkedIcon className="size-7" />,
    sub: [],

    picture: Maths12,
    pageno: [],
  };

  return (
    <Class
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

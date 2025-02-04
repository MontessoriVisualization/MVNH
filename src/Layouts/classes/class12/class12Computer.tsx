import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "../../../Component/classes";
import Maths12 from "./computer12.png";

const class12Chemistry: React.FC = () => {
  const Classdata = {
    title: "Computer Class12",
    writer: "A comprehensive note of Computer for class 12 students by MVNH",
    chapters: [
      "Database",
      "Networking",
      "Web Technology II",
      "Programming in C",
      "Object Oriented Programming",
      "Software process model",
      "Recent trends in Technology",
    ],
    icon: <BookMarkedIcon className="size-fit" />,
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

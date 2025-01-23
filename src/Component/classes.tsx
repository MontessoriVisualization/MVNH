import React from "react";
import Button from "./button";

interface ClassesProps {
  title: string;
  logo: string;
  index: number;
  topic: string;
  subtopic: string[];
  isVisible: boolean;
  onClick: () => void;
}

const Classes: React.FC<ClassesProps> = ({
  topic,
  subtopic,

  // isVisible,
  onClick,
}) => {
  return (
    <section>
      <div></div>
      <div className=" flex justify-center flex-col mt-5">
        <Button
          variant={"defult"}
          size={"defult"}
          className="flex justify-center mx-auto py-3 w-[187px]"
          onClick={onClick}
        >
          {topic}{" "}
        </Button>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-2`}>
          {subtopic.map((subtopic, index) => (
            <Button
              key={index}
              variant={"ghost"}
              size={"defult"}
              className={`w-[200px] mx-auto justify-self-center text-black
      `}
            >
              {" "}
              <span>
                {index + 1}. {subtopic}
              </span>
            </Button>
          ))}
        </div>
        <div className="border-b-2 border-grey-500 w-full mt-9"></div>
      </div>
    </section>
  );
};

export default Classes;

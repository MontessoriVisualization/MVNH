import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Button from "./button";
import { Link } from "react-router-dom";

interface CategoriesProps {
  title: string;
  writer: string;
  icon: React.ReactNode;
  chapters: string[];
  sub: string[][];
  picture: string;
  pageno: string[][];
}

const List: React.FC<CategoriesProps> = ({
  title,
  icon,
  chapters,
  sub,
  pageno,
  picture,
  writer,
}) => {
  const [openChapters, setOpenChapters] = useState<number[]>([]);

  const toggleChapter = (index: number) => {
    setOpenChapters((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-4/5 m-auto gap-6 flex flex-col">
      <div className="flex gap-2 text-lg">
        <span className="flex gap-2">
          <ChevronRight /> <Link to="/MVNH">Home</Link>
        </span>
        <span className="flex gap-2">
          <ChevronRight />
          {title}
        </span>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center flex-col w-2/12 px-3">
          <img
            src={picture}
            alt={`${title} picture`}
            className="px-4 rounded-2xl bg-gray-100 py-6"
          />
          <h1 className="text-xl font-medium">{title}</h1>
          <span className="text-sm text-gray-500">{writer}</span>
        </div>
        <div className="w-5/6">
          <h1>Chapters</h1>
          <ul>
            {chapters.map((chapter, chapterIndex) => (
              <React.Fragment key={chapterIndex}>
                <Button
                  size={null}
                  variant={"icon"}
                  className="border-gray-300 border-solid w-full border-2 rounded-lg px-6 mb-2"
                  onClick={() => toggleChapter(chapterIndex)}
                >
                  <div className="text-xl font-medium justify-between flex h-16 items-center">
                    <div className="flex gap-2">
                      {icon}
                      {chapterIndex + 1}. {chapter}
                    </div>
                    <Button size={null} variant={"icon"}>
                      <ChevronDown
                        className={`size-7 mx-2 hover:bg-gray-200 rounded-full transition-transform duration-300 ease-in-out ${
                          openChapters.includes(chapterIndex)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </Button>
                  </div>
                  <div
                    className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                      openChapters.includes(chapterIndex)
                        ? "max-h-[500px] opacity-100 mb-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {sub[chapterIndex] &&
                      sub[chapterIndex].map((subItem, subIndex) => (
                        <a
                          className="flex mb-1 font-medium text-lg justify-between"
                          key={subIndex}
                        >
                          <span>
                            {subIndex + 1}. {subItem}
                          </span>
                          <span className="text-gray-500">
                            {pageno[chapterIndex][subIndex]}
                          </span>
                        </a>
                      ))}
                  </div>
                </Button>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;

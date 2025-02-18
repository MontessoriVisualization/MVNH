import { ChevronDown, ChevronRight } from "lucide-react";
import Button from "./button";
import { Link } from "react-router-dom";
import React, { useState } from "react";

interface CategoriesProps {
  ClassLink: string;
  Class: string;
  title: string;
  writer: string;
  icon: React.ReactNode;
  Links: string[];
  chapters: {
    title: string;
    link?: string;
  }[];
  picture: string;
}

const List: React.FC<CategoriesProps> = ({
  Class,
  ClassLink,
  Links,
  title,
  icon,
  chapters,
  picture,
  writer,
}) => {
  const [chapterindex, setchapterindex] = useState<number>(0);
  const [chapter, setchapter] = useState<string>("");
  const [ifame, setifame] = useState<boolean>(false);

  const handelClick = (chapterIndex: number, Chapter: string) => {
    setchapterindex(chapterIndex);
    setifame(!ifame);
    setchapter(Chapter);
  };

  return (
    <div className="w-4/5 m-auto gap-6 flex flex-col ">
      <nav aria-label="breadcrumb" className="flex gap-2 text-lg">
        <span className="flex gap-2">
          <ChevronRight aria-hidden="true" />
          <Link to="/MVNH">Home</Link>
        </span>
        <span className="flex gap-2">
          <ChevronRight aria-hidden="true" />
          <Link to={`/MVNH${ClassLink}`}> {Class}</Link>
        </span>
        <span className="flex gap-2">
          <ChevronRight aria-hidden="true" />
          {title}
        </span>
      </nav>
      <div className="flex gap-4 md:flex-row flex-col">
        <div className="flex items-center md:flex-col md:w-2/12 gap-6 w-full px-3">
          <img
            src={picture}
            alt={`Cover for ${title}`}
            className="px-4 w-32 rounded-2xl bg-gray-100 py-6"
          />
          <div>
            <h1 className=" text-2xl md:text-xl font-medium">{title}</h1>
            <span className="text-sm text-gray-500">{writer}</span>
          </div>
        </div>
        <div className="md:w-5/6 w-full">
          {ifame ? (
            <>
              <span>{chapter}</span>
              <iframe
                src={Links[chapterindex]}
                className="w-full h-[478px]"
              ></iframe>
            </>
          ) : (
            <>
              <h2>Chapters</h2>
              <ul>
                {chapters.map((chapter, chapterIndex) => (
                  <li key={chapterIndex}>
                    {chapter.link ? (
                      <Link to={`/MVNH${chapter.link.toLowerCase()}`}>
                        <Button
                          size={null}
                          variant="icon"
                          className="border-gray-300 border-solid w-full border-2 rounded-lg px-6 mb-2"
                          aria-controls={`chapter-${chapterIndex}-content`}
                        >
                          <div className="text-base md:text-xl font-medium justify-between flex h-16 items-center">
                            <div className="flex gap-2">
                              {icon}
                              {chapterIndex + 1}. {chapter.title}
                            </div>
                            <Button
                              size={null}
                              variant="icon"
                              aria-label={`Toggle chapter ${chapterIndex + 1}`}
                            >
                              <ChevronDown
                                className={`size-7 mx-2 hover:bg-gray-200 rounded-full transition-transform duration-300 ease-in-out`}
                              />
                            </Button>
                          </div>
                          <div
                            id={`chapter-${chapterIndex}-content`}
                            className={`px-4 overflow-hidden transition-all duration-300 ease-in-out`}
                          ></div>
                        </Button>
                      </Link>
                    ) : (
                      <span
                        onClick={() => handelClick(chapterIndex, chapter.title)}
                      >
                        <Button
                          size={null}
                          variant="icon"
                          className="border-gray-300 border-solid w-full border-2 rounded-lg px-6 mb-2"
                          aria-controls={`chapter-${chapterIndex}-content`}
                        >
                          <div className="text-base md:text-xl font-medium justify-between flex h-16 items-center">
                            <div className="flex gap-2">
                              {icon}
                              {chapterIndex + 1}. {chapter.title}
                            </div>
                            <Button
                              size={null}
                              variant="icon"
                              aria-label={`Toggle chapter ${chapterIndex + 1}`}
                            >
                              <ChevronDown
                                className={`size-7 mx-2 hover:bg-gray-200 rounded-full transition-transform duration-300 ease-in-out`}
                              />
                            </Button>
                          </div>
                          <div
                            id={`chapter-${chapterIndex}-content`}
                            className={`px-4 overflow-hidden transition-all duration-300 ease-in-out`}
                          ></div>
                        </Button>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;

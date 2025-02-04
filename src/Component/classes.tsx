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
  const [openChapters, setOpenChapters] = useState<Set<number>>(new Set());

  const toggleChapter = (index: number) => {
    setOpenChapters((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="w-4/5 m-auto gap-6 flex flex-col">
      <nav aria-label="breadcrumb" className="flex gap-2 text-lg">
        <span className="flex gap-2">
          <ChevronRight aria-hidden="true" />
          <Link to="/MVNH">Home</Link>
        </span>
        <span className="flex gap-2">
          <ChevronRight aria-hidden="true" />
          {title}
        </span>
      </nav>
      <div className="flex gap-4">
        <div className="flex items-center flex-col w-2/12 px-3">
          <img
            src={picture}
            alt={`Cover for ${title}`}
            className="px-4 rounded-2xl bg-gray-100 py-6"
          />
          <h1 className="text-xl font-medium">{title}</h1>
          <span className="text-sm text-gray-500">{writer}</span>
        </div>
        <div className="w-5/6">
          <h2>Chapters</h2>
          <ul>
            {chapters.map((chapter, chapterIndex) => (
              <li key={chapterIndex}>
                <Button
                  size={null}
                  variant="icon"
                  className="border-gray-300 border-solid w-full border-2 rounded-lg px-6 mb-2"
                  onClick={() => toggleChapter(chapterIndex)}
                  aria-expanded={openChapters.has(chapterIndex)}
                  aria-controls={`chapter-${chapterIndex}-content`}
                >
                  <div className="text-xl font-medium justify-between flex h-16 items-center">
                    <div className="flex gap-2">
                      {icon}
                      {chapterIndex + 1}. {chapter}
                    </div>
                    <Button
                      size={null}
                      variant="icon"
                      aria-label={`Toggle chapter ${chapterIndex + 1}`}
                    >
                      <ChevronDown
                        className={`size-7 mx-2 hover:bg-gray-200 rounded-full transition-transform duration-300 ease-in-out ${
                          openChapters.has(chapterIndex) ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </div>
                  <div
                    id={`chapter-${chapterIndex}-content`}
                    className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                      openChapters.has(chapterIndex)
                        ? "max-h-[500px] opacity-100 mb-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {sub[chapterIndex]?.map((subItem, subIndex) => (
                      <Link
                        to={`/chapter/${chapterIndex + 1}/${subIndex + 1}`}
                        className="flex mb-1 font-medium text-lg justify-between hover:text-blue-600"
                        key={subIndex}
                      >
                        <span>
                          {subIndex + 1}. {subItem}
                        </span>
                        <span className="text-gray-500">
                          {pageno[chapterIndex][subIndex]}
                        </span>
                      </Link>
                    ))}
                  </div>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;

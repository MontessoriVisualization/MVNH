import React, { useState } from "react";
import MainLogo from "../logo.png";

import class11 from "./navsvg/class11.svg";
import class12 from "./navsvg/class12.svg";
import physic from "./navsvg/physic.svg";
import biology from "./navsvg/biology.svg";
import chemistry from "./navsvg/chemistry.svg";
import computer from "./navsvg/computer.svg";
import math from "./navsvg/maths.svg";
import oldisgold from "./navsvg/oldisgold.svg";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "../../../Component/button";

const DropdownItem: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [notesActive, setNotesActive] = useState(false);
  const [class11Active, setClass11Active] = useState(false);
  const [class12Active, setClass12Active] = useState(false);
  const [oldIsGoldActive, setOldIsGoldActive] = useState(false);

  return (
    <div className="relative top-[7px]">
      <button onClick={() => setMenuActive(!menuActive)}>
        <Menu className="h-[35px] w-[35px] lg:hidden "></Menu>
      </button>
      <ul
        className={`bg-white z-10 sm:w-[560px] absolute left-[-20px] top-0 min-w-[250px] w-screen border-r-2 lg:border-0 transition-transform transform lg:left-[86vw]  lg:top-[-14px] lg:flex md:w-[523px] md:h-[40px] lg:justify-between ${
          menuActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-2 border-b lg:hidden">
          <img className="h-10" src={MainLogo} alt="Vite logo" />
          <button
            onClick={() => setMenuActive(!menuActive)}
            className="text-xl"
          >
            <X className="h-[35px] w-[35px]"></X>
          </button>
        </div>
        <li className="p-4 border-b lg:items-center lg:flex relative group justify-center">
          <span className=" transition-all w-0 group-hover:bg-orange-500 lg:group-hover:w-32 absolute -top-7 h-1 duration-200"></span>
          <a href="">Home</a>
        </li>
        <li className="p-4 border-b lg:items-center lg:flex relative group justify-center">
          <span className=" transition-all w-0 group-hover:bg-orange-500 lg:group-hover:w-32 absolute -top-7 h-1 duration-200"></span>

          <a href="#">About</a>
        </li>
        <li
          className="border-b lg:w-32"
          onMouseEnter={() => setNotesActive(true)}
          onMouseLeave={() => setNotesActive(false)}
        >
          <Button
            size={"inherate"}
            variant="ghost"
            onClick={() => setNotesActive(!notesActive)}
            className={`${
              notesActive
                ? "bg-orange-500 text-white lg:items-center lg:justify-center lg:h-[40px] lg:rounded-md  "
                : "lg:items-center lg:justify-center lg:h-[40px]"
            }`}
          >
            Notes
            <ChevronDown
              className={`transform transition-transform ${
                notesActive ? "rotate-180" : ""
              }`}
            ></ChevronDown>
          </Button>
          {notesActive && (
            <ul className="p-4 relative lg:w-[270px] lg:right-[82px] border bg-white">
              <li
                className="border-b relative"
                onMouseEnter={() => setClass11Active(true)}
                onMouseLeave={() => setClass11Active(false)}
              >
                <button
                  onClick={() => setClass11Active(!class11Active)}
                  className="flex items-center w-full"
                >
                  <img src={class11} alt="Toggle" />
                  <div className="flex flex-col items-start">
                    <h2 className="font-bold"> Class 11</h2>
                    <span className="text-xs items-start">
                      All notes according to chapters of class11
                    </span>
                  </div>
                </button>
                {class11Active && (
                  <ul className="pl-4 lg:absolute lg:top-0 lg:right-60 lg:w-[270px] bg-white">
                    <li className="flex items-center border-b">
                      <img src={math} alt="Math" className="mr-2" />
                      <span>Class 11 Math</span>
                    </li>
                    <li className="flex items-center border-b">
                      <img src={physic} alt="Physic" className="mr-2" />
                      <span>Class 11 Physic</span>
                    </li>
                    <li className="flex items-center border-b">
                      <img src={chemistry} alt="Chemistry" className="mr-2" />
                      <span>Class 11 Chemistry</span>
                    </li>
                    <li className="flex items-center border-b">
                      <img src={computer} alt="Computer" className="mr-2" />
                      <span>Class 11 Computer</span>
                    </li>
                    <li className="flex items-center border-b">
                      <img src={biology} alt="Biology" className="mr-2" />
                      <span>Class 11 Biology</span>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="border-b relative"
                onMouseEnter={() => setClass12Active(true)}
                onMouseLeave={() => setClass12Active(false)}
              >
                <button
                  onClick={() => setClass12Active(!class12Active)}
                  className="flex items-center w-full"
                >
                  <img src={class12} />
                  <div className="flex flex-col items-start">
                    <h2 className="font-bold"> Class 12</h2>
                    <span className="text-xs">
                      All notes according to chapters of class12
                    </span>
                  </div>
                </button>
                {class12Active && (
                  <ul className="pl-4 lg:absolute lg:top-0 lg:right-60 lg:w-[270px] bg-white">
                    <li className="flex items-center border-b">
                      <img src={math} alt="Math" className="mr-2" />
                      <span>Class 12 Math</span>
                    </li>
                    <li className="flex items-center border-b">
                      <img src={physic} alt="Physic" className="mr-2" />
                      <span>Class 12 Physic</span>
                    </li>
                    <li className="flex items-center border-b">
                      <img src={chemistry} alt="Chemistry" className="mr-2" />
                      <span>Class 12 Chemistry</span>
                    </li>
                    <li className="flex items-center border-b">
                      <img src={computer} alt="Computer" className="mr-2" />
                      <span>Class 12 Computer</span>
                    </li>
                    <li className="flex items-center border-b">
                      <img src={biology} alt="Biology" className="mr-2" />
                      <span>Class 12 Biology</span>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="border-b relative"
                onMouseLeave={() => setOldIsGoldActive(false)}
                onMouseEnter={() => setOldIsGoldActive(true)}
              >
                <button
                  onClick={() => setOldIsGoldActive(!oldIsGoldActive)}
                  className="flex items-center w-full"
                >
                  <img src={oldisgold} />
                  <div className="flex flex-col items-start">
                    <h2 className="font-bold"> Old Is Gold</h2>
                    <span className="text-xs">Detailed Pdf of Old is gold</span>
                  </div>
                </button>
                {oldIsGoldActive && (
                  <ul className="pl-4 lg:absolute lg:top-0 lg:right-60 lg:w-[270px] bg-white">
                    <li className="flex items-center border-b">
                      <img src={class11} alt="Class 11" className="mr-2" />
                      <span>Class 11</span>
                    </li>
                    <li className="flex items-center border-b">
                      <img src={class12} alt="Class 12" className="mr-2" />
                      <span>Class 12</span>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li className="p-4 border-b lg:items-center justify-center lg:flex relative group">
          <a href="#">Help</a>
          <span className=" transition-all w-0 group-hover:bg-orange-500 lg:group-hover:w-32 absolute -top-7 h-1 duration-200"></span>

          <span></span>
        </li>
      </ul>
    </div>
  );
};

export default DropdownItem;

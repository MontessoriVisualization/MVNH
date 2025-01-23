import React from "react";

interface FooterProps {
  PastYear11: string[];
  PastYear12: string[];
  NebClass11: string[];
  NebClass12: string[];
  Links: string[];
}
const Footer: React.FC<FooterProps> = ({
  PastYear11,
  PastYear12,
  NebClass11,
  NebClass12,
  Links,
}) => {
  return (
    <div
      className="flex gap-20 text-[#b5d2eb] font-semibold
    "
    >
      <div className="flex gap-5 after:h-64 after:w-0.5 after:bg-gray-400">
        <ul className="gap-2 flex flex-col ">
          {Links.map((Links, index) => (
            <li key={index}>
              <a href="#" className="text-sm">
                {Links}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-9">
        <ul className="gap-2 flex flex-col">
          <h1 className="font-bold text-lg text-white">Class 11</h1>
          {NebClass11.map((NebClass11, index) => (
            <li key={index}>
              <a href="#" className="text-sm">
                {NebClass11}
              </a>
            </li>
          ))}
        </ul>
        <ul className="gap-2 flex flex-col">
          <h1 className="font-bold text-lg text-white">Class 12</h1>

          {NebClass12.map((NebClass12, index) => (
            <li key={index}>
              <a href="#" className="text-base">
                {NebClass12}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <h1 className="font-bold text-lg text-white">Past Year Question</h1>

          <div className="flex gap-3">
            <ul className="gap-2 flex flex-col">
              {PastYear11.map((PastYear11, index) => (
                <li key={index}>
                  <a href="#" className="text-sm">
                    {PastYear11}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="gap-2 flex flex-col">
              {PastYear12.map((PastYear12, index) => (
                <li key={index}>
                  <a href="#" className="text-sm">
                    {PastYear12}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

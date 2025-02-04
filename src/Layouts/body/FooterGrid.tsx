import React from "react";
import Footer from "../../Component/Footer";
import Logo from "../../public/logo.svg";
import { Twitter, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Button from "../../Component/button";

const FooterData = [
  {
    Links: [
      "FAQ",
      "Home",
      "About Us",
      "Contact Us",
      "Privacy Policy",
      "Terms and Conditions",
    ],
    NebClass11: [
      "Class 11 Physics",
      "Class 11 Chemistry",
      "Class 11 Biology",
      "Class 11 Computer",
      "Class 11 Math",
    ],
    PastYear11: [
      "PYQ Class11 Physics",
      "PYQ Class11 Chemistry",
      "PYQ Class11 Biology",
      "PYQ Class11 Computer",
      "PYQ Class11 Math",
    ],
    PastYear12: [
      "PYQ Class12",
      "PYQ Class12 Chemistry",
      "PYQ Class12 Biology",
      "PYQ Class12 Computer",
      "PYQ Class12 Math",
    ],
    NebClass12: [
      "Class 12 Physics",
      "Class 12 Chemistry",
      "Class 12 Biology",
      "Class 12 Computer",
      "Class 12 Math",
    ],
  },
];

const FooterGrid: React.FC = () => {
  console.log("Rendering FooterGrid with data:", FooterData);

  return (
    <div className="flex flex-col mt-12 px-14 pt-9 pb-4 justify-center gap-4 bg-[#192733]">
      <div className="p-4 w-full hidden md:flex flex-col lg:flex-row gap-20 justify-center">
        {FooterData.map((FooterProps, index) => (
          <Footer
            key={index}
            NebClass11={FooterProps.NebClass11}
            NebClass12={FooterProps.NebClass12}
            PastYear11={FooterProps.PastYear11}
            PastYear12={FooterProps.PastYear12}
            Links={FooterProps.Links}
          />
        ))}
      </div>
      <div className="justify-center flex flex-col gap-4">
        <div
          className="flex justify-center items-center before:h-0.5 before:w-72
         before:bg-gray-400 after:h-0.5 after:w-72 after:bg-gray-400"
        >
          <Button size={"fticon"} variant={"fticon"}>
            <Linkedin className="w-8 h-8"></Linkedin>
          </Button>
          <Button size={"fticon"} variant={"fticon"}>
            <Twitter className="w-8 h-8"></Twitter>
          </Button>
          <Button size={"fticon"} variant={"fticon"}>
            <Facebook className="w-8 h-8"></Facebook>
          </Button>
          <Button size={"fticon"} variant={"fticon"}>
            <Instagram className="w-8 h-8"></Instagram>
          </Button>
          <Button size={"fticon"} variant={"fticon"}>
            <Youtube className="w-9 h-9"></Youtube>
          </Button>
        </div>
        <div className="w-full flex-col gap-2 flex items-center justify-center">
          <img src={Logo} alt="" className="text-green-300 fill-white" />

          <span className="text-sm font-bold text-gray-400">
            Copyright © 2021 MVHN,Inc
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterGrid;

import React from "react";
import Footer from "../../Component/Footer";
import Logo from "./logo.svg";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import Button from "../../Component/button";
import { PiTiktokLogo } from "react-icons/pi";


const FooterData = [
  {
    Links: [
      { label: "FAQ", route: "/faq" },
      { label: "Home", route: "/" },
      { label: "About Us", route: "/about" },
      { label: "Contact Us", route: "/contact" },
      { label: "Privacy Policy", route: "/privacy-policy" },
      { label: "Terms and Conditions", route: "/terms" },
    ],
    NebClass11: [
      { label: "Class 11 Physics", route: "/class11physic" },
      { label: "Class 11 Chemistry", route: "/class11chemistry" },
      { label: "Class 11 Biology", route: "/class11biology" },
      { label: "Class 11 Computer", route: "/class11computer" },
      { label: "Class 11 Math", route: "/class11maths" },
    ],
    PastYear11: [
      { label: "PYQ Class11 Physics", route: "/pastyear/class11physic" },
      { label: "PYQ Class11 Chemistry", route: "/pastyear/class11chemistry" },
      { label: "PYQ Class11 Biology", route: "/pastyear/class11biology" },
      { label: "PYQ Class11 Computer", route: "/pastyear/class11computer" },
      { label: "PYQ Class11 Math", route: "/pastyear/class11maths" },
    ],
    NebClass12: [
      { label: "Class 12 Physics", route: "/class12physics" },
      { label: "Class 12 Chemistry", route: "/class12chemistry" },
      { label: "Class 12 Biology", route: "/class12biology" },
      { label: "Class 12 Computer", route: "/class12computer" },
      { label: "Class 12 Math", route: "/class12maths" },
    ],
    PastYear12: [
      { label: "PYQ Class12", route: "/pastyear/class12" },
      { label: "PYQ Class12 Chemistry", route: "/pastyear/class12chemistry" },
      { label: "PYQ Class12 Biology", route: "/pastyear/class12biology" },
      { label: "PYQ Class12 Computer", route: "/pastyear/class12computer" },
      { label: "PYQ Class12 Math", route: "/pastyear/class12maths" },
    ],
  },
];

const FooterGrid: React.FC = () => {
  return (
    <div className="flex-col mt-12 px-14 pt-9 pb-4 justify-center gap-4 bg-[#192733]">
      <div className="p-4 w-full hidden md:flex flex-col lg:flex-row gap-20 justify-center">
        {FooterData.map((footerProps, index) => (
          <Footer
            key={index}
            Links={footerProps.Links}
            NebClass11={footerProps.NebClass11}
            NebClass12={footerProps.NebClass12}
            PastYear11={footerProps.PastYear11}
            PastYear12={footerProps.PastYear12}
          />
        ))}
      </div>
      <div className="justify-center flex flex-col gap-4">
        <div className="flex justify-center items-center before:h-0.5 before:w-72 before:bg-gray-400 after:h-0.5 after:w-72 after:bg-gray-400">
          <a href="https://www.linkedin.com/in/montessori-visualization/" target="_blank" rel="noopener noreferrer">
          <Button size={"fticon"} variant={"fticon"}>
            <Linkedin className="w-8 h-8" />
          </Button>
          </a>

          <a href="https://www.tiktok.com/@montessori.visualization" target="_blank" rel="noopener noreferrer">
                    <Button size={"fticon"} variant={"fticon"}>
            <PiTiktokLogo className="w-8 h-8" />
          </Button>
          </a>
          <a href="https://www.facebook.com/share/17dPKYf3WV/" target="_blank" rel="noopener noreferrer">
          <Button size={"fticon"} variant={"fticon"}>
            <Facebook className="w-8 h-8" />
          </Button>
          </a>
          <a href="https://www.instagram.com/montessorivisualization" target="_blank" rel="noopener noreferrer">
          <Button size={"fticon"} variant={"fticon"}>
            <Instagram className="w-8 h-8" />
          </Button>
          </a>
          <a href="https://www.youtube.com/@MontessoriVisualization" target="_blank" rel="noopener noreferrer">
          <Button size={"fticon"} variant={"fticon"} >
            <Youtube className="w-9 h-9" />
          </Button>
          </a>
        </div>
        <div className="w-full flex-col gap-2 flex items-center justify-center">
          <img src={Logo} alt="" className="text-green-300 fill-white" />
          <span className="text-sm font-bold text-gray-400">
            Copyright© {new Date().getFullYear()} MVHN,Inc
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterGrid;

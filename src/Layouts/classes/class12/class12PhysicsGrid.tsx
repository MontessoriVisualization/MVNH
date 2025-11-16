import React from "react";
import { BookMarkedIcon } from "lucide-react";
import Class from "../../../Component/classes";
import Physics12 from "./physic12.png";

const Example: React.FC = () => {
  const Classdata = {
    Class: "class12",
    ClassLink: "/class12",

    title: "Physics 12",
    writer: "A comprehensive note of physics for class 12 students by MVNH",
    chapters: [
      "Mechanics",
      "Heat and Thermodynamics",
      "Wave and Optics",
      "Electricity and Magnetism",
      "Modern Physic",
    ],
    icon: <BookMarkedIcon className="size-fit" />,
    sub: [
      ["Rotational Dynamics", "Perodic Motion", "Fluid Statics"],
      ["First Law of Thermodynamics", "Second law of Thermodynamics"],
      [
        "Wave and Wave Motion",
        "Mechanical Wave",
        "Wave In Pipes And String",
        "Acoustic Phenomena",
        "Nature and Propagation of Light",
        "Interference",
        "Diffraction",
        "Polorization",
      ],
      [
        "Electrical Circuits",
        "Thermoelectric Effect",
        "Magnetic Feild",
        "Magnetic Properties of Material",
        "Electromagnetic Induction",
        "Alternating Current",
      ],
      [
        "Electron",
        "Photon",
        "Quantization of energy",
        "Semiconductor Devices",
        "X-Rays",
        "Radioactivity and Nuclear Rediation",
        "Recent Trends",
        "Semiconductors"
      ],
    ],
    picture: Physics12,
    pageno: [
      ["1-24", "35-68", "69-124"],
      ["126-154", "155-180"],
      [
        "181-204",
        "205-224",
        "225-248",
        "249-268",
        "269-276",
        "277-294",
        "295-310",
        "311-322",
      ],
      ["323-352", "353-364", "365-408", "409-424", "425-460", "461-492"],
      ["493-516", "517-540", "541-558", "559-594", "595-620", "621-632"],
    ],
    Links: [
      [
        "https://drive.google.com/file/d/1FYyWWjn_lJPYmQswoxrywQBzRI1S_tFC/preview",
"https://drive.google.com/file/d/1GP57iW9f2NtOIl0Viq9stHSHJ6XsW-UO/preview",
"https://drive.google.com/file/d/1uf2EJgjz04Kb6nzoEzHx2u7R6hOhUMv6/preview",
       
      ],
      [
        "https://drive.google.com/file/d/1V71tWKIDOmWrYJtEBiU5t3c_lLMfhiJC/preview",
        "https://drive.google.com/file/d/1V7EzQWnsoNNx39dr7Bb1x0OOAm7NiJY_/preview",

      ],
      [
        "https://drive.google.com/file/d/1U6ni-RnVI0yB_nWmpM3ouTWYg72khXsG/preview",
        "https://drive.google.com/file/d/1vW1CONp_javB365jXX-pOHcte1eBBBQE/preview",
        "https://drive.google.com/file/d/1vbiFqTOwCVzcUbufiOpWZmApM4pX5eB8/preview",
        "https://drive.google.com/file/d/1vbx8cbjSrX48gfqj49NDUKlxWPS4Z2l8/preview",
        "https://drive.google.com/file/d/1CVlZ0eKEcmKAdHMe_oLZ7qt3FOojuVGI/preview",
        "https://drive.google.com/file/d/1veSFIxWQcZZwf3x3a43MpOvTpBcPF-DK/preview",
        "https://drive.google.com/file/d/1vdlB0HQ4JAtbOUvhaPNdWcXRCRSTOdqv/preview",
        "https://drive.google.com/file/d/1vg2W414isjOw3bicuW6uOlf9tGmjG-xz/preview",
        "https://drive.google.com/file/d/1CbUH6blpiUk96b9xeDlOMDinoSCUivYh/preview",
        "https://drive.google.com/file/d/1CaEPcj74g8m4sKf3jG4GxVqVypi1VYQI/preview",
        "https://drive.google.com/file/d/1v1-VHUG6GV-An0PKV8obHamTq-c4hz0i/preview",
                "https://drive.google.com/file/d/1CKjgQ-vkL1b-qvc8sTqBGVvSX5QVf02R/preview",

      ],
      [
        "https://drive.google.com/file/d/1tSFIEEqvKM2g5GeTjcW7xlCYpNBMzzUJ/preview",
        "https://drive.google.com/file/d/1wY5vovBWLdLJwQr95qQHYSJ2GyGK6tst/preview",
        "https://drive.google.com/file/d/1V4-XAnepx_zD1G2uLbqFmyqlp1knNJCj/preview",
        "https://drive.google.com/file/d/13JeoZL4pnzN9aHiJDmGMGbG3bGg3to5o/preview",
        "https://drive.google.com/file/d/1V1wCKD46aFi-FiN1TI2UibpPGszdReKa/preview",
        "https://drive.google.com/file/d/1UsUtkphqt_o5u2wmeKylwVgVhZJ-kDL_/preview",
      ],
      [
        "https://drive.google.com/file/d/1UrdnYOEwLnBDm4_BaGpzBxIY0yibDQuA/preview",
        "https://drive.google.com/file/d/1Uive8__W2LNF9gWBlxHwjMKTnyUHyWqE/preview",
        "https://drive.google.com/file/d/1UVT4G71Ao9bCO90kUPe22e-JNG325_zx/preview",
        "https://drive.google.com/file/d/1UY3IYA3is6a0Vmj2Np8rV25xa0gWXm3x/preview",
        "https://drive.google.com/file/d/1USPwPocvzjd7lYGKs1NroPwJsmJWapjR/preview",
        "https://drive.google.com/file/d/1UMtv2G50PDBbw9wyLOImqHXMEjWHYSlO/preview",
        "https://drive.google.com/file/d/1BazD4KVukl_b8Yy6Tahq7AGI0WW4K850/preview",
         "https://drive.google.com/file/d/1h14a543WwKhQZPxYyP3YDbHWSPtj4Ni6/preview",
  ],
      
    ],
  };

  return (
    <Class
      Links={Classdata.Links}
      ClassLink={Classdata.ClassLink}
      Class={Classdata.Class}
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

export default Example;

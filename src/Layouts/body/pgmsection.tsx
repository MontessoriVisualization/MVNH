import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";
import { useNavigate } from "react-router-dom";

type Card = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bgGradient: string;
  iconBg: string;
  path: string;
  tags: string[];
};

const programmingCards: Card[] = [
  {
    title: "HTML & CSS",
    subtitle: "Build beautiful websites from scratch with interactive features",
    icon: (
      <div className="flex gap-2 text-black group-hover:text-transparent transition-all duration-500">
        <FaHtml5 className="w-12 h-12 group-hover:text-orange-600" />
        <FaCss3Alt className="w-12 h-12 group-hover:text-blue-600" />
      </div>
    ),
    bgGradient: "from-orange-500 to-blue-500",
    iconBg: "bg-gradient-to-r from-orange-50 to-blue-50",
    path: "/fos",
    tags: ["Frontend", "Web Dev"],
  },
  {
    title: "JavaScript",
    subtitle: "Make your websites interactive and dynamic",
    icon: <FaJs className="w-16 h-16 text-black group-hover:text-yellow-500 transition-colors duration-500" />,
    bgGradient: "from-yellow-400 to-yellow-600",
    iconBg: "bg-yellow-50",
    path: "/fos",
    tags: ["Frontend", "Scripting"],
  },
  {
    title: "C Programming",
    subtitle: "Master the fundamentals of programming",
    icon: <SiC className="w-14 h-14 text-black group-hover:text-blue-600 transition-colors duration-500" />,
    bgGradient: "from-blue-500 to-blue-700",
    iconBg: "bg-blue-50",
    path: "/tos",
    tags: ["Systems", "Basics"],
  },
  {
    title: "Python",
    subtitle: "Begin your coding journey with versatile language",
    icon: <FaPython className="w-16 h-16 text-black group-hover:text-blue-500 transition-colors duration-500" />,
    bgGradient: "from-blue-400 to-cyan-500",
    iconBg: "bg-gradient-to-r from-blue-50 to-cyan-50",
    path: "#",
    tags: ["Scripting", "Automation"],
  },
  {
    title: "React",
    subtitle: "Build modern web applications with components",
    icon: <FaReact className="w-16 h-16 text-black group-hover:text-cyan-400 transition-colors duration-500" />,
    bgGradient: "from-cyan-400 to-blue-500",
    iconBg: "bg-cyan-50",
    path: "#",
    tags: ["Framework", "Frontend"],
  },
  {
    title: "C++",
    subtitle: "Object-oriented programming and advanced concepts",
    icon: <SiCplusplus className="w-14 h-14 text-black group-hover:text-purple-600 transition-colors duration-500" />,
    bgGradient: "from-purple-500 to-indigo-600",
    iconBg: "bg-gradient-to-r from-purple-50 to-indigo-50",
    path: "#",
    tags: ["OOP", "Advanced"],
  },
];

const PgmSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto px-7 my-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold my-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Programming & Development
        </h2>
        <p className="text-gray-500 text-lg mt-3">
          Master coding skills with our comprehensive programming tutorials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programmingCards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => navigate(card.path)}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
          >
            {/* Gradient background overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            {/* Content */}
            <div className="relative p-6">
              {/* Icon circle */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${card.iconBg}`}>
                {card.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold text-gray-800 mb-2 transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text ${card.bgGradient}`}>
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {card.subtitle}
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-4">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-pink-100 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Arrow */}
              <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                <span>Explore Now</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.bgGradient} opacity-20 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PgmSection;
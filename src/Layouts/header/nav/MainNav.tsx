import Button from "../../../Component/button";
import DropdownItem from "./dropdown";
import { ChevronDown } from "lucide-react";

export default function NavMain() {
  return (
    <div className="mnflx">
      <ul className="w-[523px] hidden lg:flex  lg:justify-center justify-between mx-12 h-[61.31px] items-center">
        <li className="group relative flex h-full justify-center items-center list-none">
          <span className=" transition-all w-0 group-hover:bg-orange-500 group-hover:w-[100px] absolute top-0 h-0.5 duration-200"></span>
          <a href="">Home</a>
        </li>
        <li className="group relative flex h-full justify-center items-center list-none">
          <span className=" transition-all w-0 group-hover:bg-orange-500 group-hover:w-[100px] absolute top-0 h-0.5 duration-200"></span>
          <a href="">About</a>
        </li>
        <li className="relative flex justify-center items-center list-none">
          <Button variant="defult">
            <div className="w-16 mx-auto flex justify-between items-center">
              Notes
              <span>
                <ChevronDown className="stroke-1 group-hover:transition-all group-hover:rotate-180"></ChevronDown>{" "}
              </span>
            </div>
          </Button>
          <div className="absolute top-10 w-[257px] h-[200px]">
            <div className="absolute top-0 right-[257px] w-[163px]">
              <DropdownItem />
            </div>
          </div>
        </li>
        <li className="group relative flex h-full justify-center items-center list-none">
          <span className=" transition-all w-0 group-hover:bg-orange-500 group-hover:w-[100px] absolute top-0 h-0.5 duration-200"></span>
          <a href="">Help</a>
        </li>
      </ul>
    </div>
  );
}

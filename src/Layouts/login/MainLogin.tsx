import React, { useState, ChangeEvent } from "react";

import Google from "./google.svg";
import {
  Circle,
  CircleCheck,
  Eye,
  EyeClosed,
  Facebook,
  LockIcon,
  Mail,
  ShieldCheck,
  Twitter,
} from "lucide-react";
import Photo0 from "./photo0.png";
import Button from "../../Component/button";

const App: React.FC = () => {
  const [seePass, setseePass] = useState(false);
  const [rememberME, setRememberME] = useState(false);
  const [emailValue, setemailValue] = useState("");
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setemailValue(event.target.value);
  };
  const [passValue, setpassValue] = useState("");
  const handlePassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setpassValue(event.target.value);
  };
  return (
    <div className="flex justify-center lg:bg-main-bg items-center min-h-screen lg:w-full w-[436px]">
      <div className="hidden lg:flex">
        <img src={Photo0} className="" />
      </div>
      <div className="items-center mx-5 my-0 select-none lg:h-[530px] w-[436px]">
        <div className="pb-9">
          <h1 className="text-3xl font-light py-4">Welcome Back :)</h1>
          <p className="text-xs">
            📚 MVHN – Your Favorite Learning Partner Stay connected to the best
            notes and resources. Please enter your email and password to
            continue exploring our content.
          </p>
        </div>
        <div>
          <form action="" className="">
            <div className="border h-[48px] relative bg-inp-bg">
              <span
                className={`absolute text-gray-600 z-10 pointer-events-none	
                   ${
                     emailValue
                       ? "text-xs top-0 right-0 left-10"
                       : "text-sm bottom-2 left-12"
                   }`}
              >
                Email Address
              </span>
              <label className="relative flex items-center h-full px-3">
                <Mail className="color-grey-100 text-gray-300 stroke-2 w-9" />
                <input
                  className="w-full h-full bg-gray-100 focus:outline-none -4"
                  type="email"
                  onChange={handleEmailChange}
                />
                <Button variant={null} size={"icon"} className="mr-0">
                  <ShieldCheck className="color-grey-200 text-green-600 stroke-1 w-9" />
                </Button>
              </label>
            </div>
            <div className="border h-[48px] relative bg-inp-bg">
              <span
                className={`absolute text-gray-600 z-10 pointer-events-none	 ${
                  passValue
                    ? "text-xs top-0 right-0 left-10"
                    : "text-sm bottom-2 left-12"
                }`}
              >
                Password
              </span>
              <label className="relative flex items-center h-full px-3">
                <LockIcon className="color-grey-100 text-gray-300 stroke-2 w-9" />
                <input
                  className="w-full h-full bg-gray-100 focus:outline-none"
                  type={seePass ? "text" : "password"}
                  onChange={handlePassChange}
                />
                <Button
                  size={"icon"}
                  variant={"icon"}
                  className="color-grey-100 text-gray-300 w-11 mr-0 relative"
                  onClick={() => setseePass(!seePass)}
                >
                  {" "}
                  <Eye className={`absolute ${seePass ? "flex" : "hidden"}`} />
                  <EyeClosed
                    className={`absolute ${seePass ? "hidden" : "flex"}`}
                  />
                </Button>
              </label>
            </div>
            <div className="text-xs text-gray-600 flex py-4 items-center justify-between p-3">
              <div className="flex items-center">
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="relative color-grey-100 w-9"
                  onClick={() => setRememberME(!rememberME)}
                >
                  <CircleCheck
                    className={`absolute ${rememberME ? "hidden" : "flex"}`}
                  />
                  <Circle
                    className={`absolute ${rememberME ? "flex" : "hidden"}`}
                  />
                </Button>
                <span>Remember me</span>
              </div>
              <a href="#">Forgot password?</a>
            </div>
            <div className="flex items-center">
              <Button
                type="submit"
                variant={"defult"}
                size={"defult"}
                className="mr-2 bg-orange-500 text-white"
              >
                Signin
              </Button>
              <Button variant={"defult"} size={"defult"}>
                Create Account
              </Button>
            </div>
            <div className="text-xs text-gray-600 py-4 items-center">
              <div className="flex items-center">
                <span className="">Or Continue with</span>
              </div>
              <div className="flex py-2">
                <Button size={"icon"} variant={"icon"}>
                  <img src={Google} alt="" />
                </Button>
                <Button
                  size={"icon"}
                  variant={"icon"}
                  className="bg-light-blue"
                >
                  <Twitter className="color-grey-100 text-gray-300 stroke-2 w-9"></Twitter>
                </Button>
                <Button size={"icon"} variant={"icon"} className="bg-dark-blue">
                  <Facebook className="color-grey-100 text-gray-300 stroke-2 w-9"></Facebook>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default App;

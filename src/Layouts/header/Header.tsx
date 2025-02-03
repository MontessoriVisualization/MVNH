import { Link } from "react-router-dom";
import Button from "../../Component/button";
import MainLogo from "./logo.png";
import DropDown from "./nav/dropdown";
export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center h-24 px-5 my-0 select-none">
        <div className="flex items-center">
          <DropDown></DropDown>{" "}
          <img className="h-10 flex-srink-0" src={MainLogo} alt="Vite logo" />
        </div>
        <Link to="/MVNH/login">
          <Button variant={"defult"}>Login</Button>
        </Link>
      </header>
    </>
  );
}

import Button from "../../Component/button";
import MainLogo from "./logo.png";
import DropDown from "./nav/dropdown";
export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center mx-5 my-0 select-none">
        <div className="flex items-center">
          <DropDown></DropDown>{" "}
          <img className="h-10 flex-srink-0" src={MainLogo} alt="Vite logo" />
        </div>
        <Button variant={"defult"}>
          <a href="index.html">
            {" "}
            <span className=""></span>
            Sign In
          </a>
        </Button>
      </header>
    </>
  );
}

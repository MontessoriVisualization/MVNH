import Button from "../../Component/button";
import hello from "./hello.webp";
const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-around items-center mx-auto px-7 md:mb-20">
      <div className="md:pr-9 my-6 md:w-2/5 w-full">
        <div>
          <span className="bg-light-orange text-Wht text-sm px-1 py-2 rounded flex w-max my-4">
            Boost grade with MVHN.{" "}
          </span>
          <h1 className="text-4xl font-bold my-b-5">
            All the tools for your success, right at your fingertips.
          </h1>
          <span className="text-base flex my-3">
            MVHN provides a platform that gives you access to the best Notes,
            Study Guides, and Past Year Papers—all in one place
          </span>
        </div>
        <Button variant={"defult"} size={"defult"}>
          Get started
        </Button>
      </div>
      <div>
        <img src={hello} alt="" />
      </div>
    </div>
  );
};
export default Hero;

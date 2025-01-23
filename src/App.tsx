import "./index.css";
// import ClassesGrid from "./Layouts/body/class11Grid";
import CardsGrid from "./Layouts/body/CardsGrid";
import CatGrid from "./Layouts/body/catGrid";
import FaqGrid from "./Layouts/body/faqGrid";
import FooterGrid from "./Layouts/body/FooterGrid";
import Hero from "./Layouts/body/hero";
import Header from "./Layouts/header/Header";
// import Login from "./Layouts/login/MainLogin";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <CardsGrid />
      <CatGrid></CatGrid>
      <FaqGrid></FaqGrid>
      <FooterGrid></FooterGrid>
      {/* <ClassesGrid></ClassesGrid> */}
      {/* <Login></Login> */}
    </>
  );
}

export default App;

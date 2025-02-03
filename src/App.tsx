import "./index.css";
import CardsGrid from "./Layouts/body/CardsGrid";
import CatGrid from "./Layouts/body/catGrid";
import FaqGrid from "./Layouts/body/faqGrid";
import FooterGrid from "./Layouts/body/FooterGrid";
import Hero from "./Layouts/body/hero";
import Header from "./Layouts/header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <CardsGrid />
      <CatGrid></CatGrid>
      <FaqGrid></FaqGrid>
      <FooterGrid></FooterGrid>
    </>
  );
}

export default App;

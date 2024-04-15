// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./componets/navbar/NavBar";

// import HeroSection from "./componets/herosection/HeroSection";
// import HeroSection2 from "./componets/herosection/HeroSection2";
// import About from "./componets/about/About";
import LeftNavBar from "./componets/LeftSidePage/LeftNavBar";
import MobileRespnsive from "./componets/mobile/MobileRespnsive";

function App() {
  return (
    <>
      <div className="min-h-screen flex container  relative    md:px-1 px-2  max-w-[100%] md:max-w-[80%] md:mx-auto">
        <NavBar />
        <LeftNavBar />
      </div>
    </>
  );
}

export default App;

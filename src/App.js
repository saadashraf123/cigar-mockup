import About from "./components/About";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <div style={{ backgroundColor: "#000" }}>
        <Features />
        <About />
      </div>
    </div>
  );
}

export default App;

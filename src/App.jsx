import Board from "./components/Board";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div class="bg-[#191D26] font-[Inter] text-white mx-auto max-width-[1400px]">
      <Nav />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <Board />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "./Navbar";
import home from "/home-background.png";
import { Link } from "react-router";

function Home() {
  return (
    <div
      style={{ backgroundImage: `url('${home}')` }}
      className="h-screen w-screen bg-no-repeat bg-center bg-cover flex-col justify-items-center"
    >
      <h1 className="text-white sm:text-8xl text-7xl text-center font-bold pt-60">
        COLE ANDRAE
      </h1>
      <h1 className="text-white sm:text-xl text-xs text-center pt-2 animate-pulse">
        d e e p - l e a r n i n g - a n d - b i o i n f o r m a t i c s .
      </h1>
      <Navbar></Navbar>
    </div>
  );
}

export default Home;

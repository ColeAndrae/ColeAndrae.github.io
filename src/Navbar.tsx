import NavButton from "./NavButton";

function Navbar() {
  return (
    <div className="fixed bottom-20 sm:w-100 w-80 h-10 bg-white rounded-lg text-center flex justify-evenly items-center">
      <NavButton location="Home"></NavButton>
      <div> | </div>
      <NavButton location="About"></NavButton>
      <div> | </div>
      <NavButton location="Projects"></NavButton>
    </div>
  );
}

export default Navbar;

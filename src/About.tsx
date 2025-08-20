import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";
import about from "/about-background.png";

function About() {
  return (
    <div
      style={{ backgroundImage: `url('${about}')` }}
      className="w-screen h-screen bg-no-repeat bg-center bg-cover flex-col justify-items-center"
    >
      <h1 className="w-100 mx-auto text-white sm:text-7xl text-6xl text-center font-bold pt-12">
        ABOUT ME
      </h1>
      <ProfileCard></ProfileCard>
      <Navbar></Navbar>
    </div>
  );
}

export default About;

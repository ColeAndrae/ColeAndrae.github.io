import ProjectCard from "./ProjectCard";
import projects from "/projects-background.png";
import protien from "/protien.png";
import chess from "/chess-board.png";
import xray from "/x-ray.png";
import Navbar from "./Navbar";

function Projects() {
  return (
    <div
      style={{ backgroundImage: `url('${projects}')` }}
      className="w-screen h-screen flex-col justify-items-center bg-no-repeat bg-center bg-cover"
    >
      <h1 className="w-100 mx-auto text-white text-7xl text-center font-bold pt-12">
        PROJECTS
      </h1>
      <ProjectCard
        image={protien}
        url="https://github.com/ColeAndrae/AMPForge"
        summary="Variational Autoencoder for Novel Antimicrobial Peptide Generation."
        title="AMPForge"
      ></ProjectCard>
      <ProjectCard
        image={xray}
        url="https://github.com/ColeAndrae/MEDUSA"
        summary="A convolutional neural network trained to classify X-rays and CT scans."
        title="Medusa"
      ></ProjectCard>
      <ProjectCard
        image={chess}
        url="https://github.com/ColeAndrae/Chess_v1"
        summary="Chess Game with an Integrated AI Opponent."
        title="SmartChess"
      ></ProjectCard>
      <Navbar></Navbar>
    </div>
  );
}

export default Projects;

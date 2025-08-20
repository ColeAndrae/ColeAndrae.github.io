import SocialButton from "./SocialButton";
import linkedin from "/linkedin.png";
import github from "/github.png";
import email from "/email.png";
import cole from "/cole.jpg";

function ProfileCard() {
  return (
    <div className="sm:w-100 w-80 sm:h-105 h-115 bg-white my-12 rounded-lg mx-auto shadow-2xl flex-col justify-baseline p-5">
      <div className="flex justify-around items-end">
        <div
          style={{ backgroundImage: `url('${cole}')` }}
          className="w-45 h-45 bg-no-repeat bg-center rounded-lg bg-cover border-1 mb-5"
        ></div>
        <SocialButton
          url="https://www.linkedin.com/in/cole-andrae/"
          image={linkedin}
        ></SocialButton>
        <SocialButton
          url="https://github.com/ColeAndrae"
          image={github}
        ></SocialButton>
        <SocialButton
          url="mailto:cole@theandraes.com"
          image={email}
        ></SocialButton>
      </div>
      <hr className="my-4"></hr>
      <h1 className="sm:w-90 w-70 h-50 items-center font-sans">
        I am a UBC undergraduate student passionate about the intersection of
        machine learning and bioinformatics. As a dedicated student-athlete, I
        thrive on challenges and am eager to connect with others to explore new
        ideas and potential collaborations.
      </h1>
    </div>
  );
}

export default ProfileCard;

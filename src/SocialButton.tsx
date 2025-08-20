interface SocialButtonProps {
  image: string;
  url: string;
}

function SocialButton(props: SocialButtonProps) {
  let image = props.image;
  let url = props.url;
  return (
    <a
      style={{ backgroundImage: `url('${image}')` }}
      className="sm:w-10 sm:h-10  w-6 h-6 rounded-lg border-1 my-5 transition-transform duration-200 hover:-translate-y-1 bg-no-repeat bg-center bg-cover"
      href={url}
    ></a>
  );
}

export default SocialButton;

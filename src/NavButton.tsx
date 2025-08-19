import { Link } from "react-router";

interface NavButtonProps {
  location: string;
}
function NavButton(props: NavButtonProps) {
  let location = props.location;
  return (
    <Link
      className="transition-transform duration-200 hover:-translate-y-1"
      to={"/" + location}
    >
      {location.toLowerCase()}
    </Link>
  );
}

export default NavButton;

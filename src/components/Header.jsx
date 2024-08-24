import logo from "../assets/alemar-logo-gengar.svg";
import Nav from "./headerComponents/Nav";

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="Brand Logo" />
        <Nav />
      </div>
    </header>
  );
}

export default Header;

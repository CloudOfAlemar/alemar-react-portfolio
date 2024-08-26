/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import common from "../constants/commonStyles";

// Import Components
import HeaderNavbar from "./headerComponents/HeaderNavbar";
import HeroArea from "./headerComponents/HeroArea";

function Header() {
  return (
    <header>
      <HeaderNavbar />
      <HeroArea />
    </header>
  );
}

export default Header;

/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { utils } from "../constants/utils";

import logo from "../assets/alemar-logo-gengar.svg";
import Nav from "./headerComponents/Nav";

const logoContainer = css`
  padding: ${utils.gutterSm};
  position: relative;
`;

const logoImg = css`
  width: 100px;
`;

function Header() {
  return (
    <header>
      <div css={logoContainer}>
        <img css={logoImg} src={logo} alt="Brand Logo" />
        <Nav />
      </div>
    </header>
  );
}

export default Header;

/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { utils } from "../../constants/utils";
import logo from "../../assets/alemar-logo-gengar.svg";

// Import Components
import Nav from "./headerNavbarComponents/Nav";

// Emotion CSS
const headerNavbar = css`
  padding: ${utils.gutterSm};
  position: relative;
`;

const logoImg = css`
  width: 100px;
`;

function HeaderNavbar() {
  return (
    <div css={headerNavbar}>
      <img css={logoImg} src={logo} alt="Brand Logo" />
      <Nav />
    </div>
  );
}

export default HeaderNavbar;

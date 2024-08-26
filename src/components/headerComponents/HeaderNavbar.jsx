/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { utils } from "../../constants/utils";
import common from "../../constants/commonStyles";
import logo from "../../assets/alemar-logo-gengar.svg";

// Import Components
import Nav from "./headerNavbarComponents/Nav";

// Emotion CSS
const headerNavbar = css`
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media screen and (min-width: 768px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const navbarContainer = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const logoImg = css`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
  @media screen and (min-width: 1400px) {
    width: 295px;
  }
`;

function HeaderNavbar() {
  return (
    <div css={[headerNavbar, common.sideGutters]}>
      <div css={[common.contentContainer, navbarContainer]}>
        <img css={logoImg} src={logo} alt="Brand Logo" />
        <Nav />
      </div>
    </div>
  );
}

export default HeaderNavbar;

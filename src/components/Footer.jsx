/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { utils } from "../constants/utils";
import SocialLinks from "./footerComponents/SocialLinks";

const footer = css`
  padding: 4rem ${utils.gutterSm};
  display: flex;
  justify-content: center;
`;

function Footer() {
  return (
    <footer css={footer}>
      <SocialLinks />
    </footer>
  );
}

export default Footer;

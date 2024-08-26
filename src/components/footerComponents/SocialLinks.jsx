/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../constants/colors";

const icon = css`
  font-size: 3rem;
  color: ${colors.darkPurple};
  margin-right: 1.5rem;
  @media screen and (min-width: 1400px) {
    font-size: 5rem;
    margin-right: 10rem;
  }
`;

const otherLink = css`
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 3.2rem;
  color: ${colors.pink};
  text-decoration: none;
  @media screen and (min-width: 1400px) {
    font-size: 3rem;
    line-height: 3.2rem;
  }
`;

function SocialLinks() {
  return (
    <div>
      <a css={icon} href="">
        <i className="fa-brands fa-square-github"></i>
      </a>
      <a css={icon} href="">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a css={otherLink} href="">
        Frontend Mentor
      </a>
    </div>
  );
}

export default SocialLinks;

/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { utils } from "../../constants/utils";
import profileImg from "../../assets/me.jpg";
import AboutContent from "./aboutComponents/AboutContent";

const about = css`
  padding: 4rem ${utils.gutterSm};
`;

const profileImgStyle = css`
  display: block;
  width: 100%;
  border-radius: 50%;
`;

function About() {
  return (
    <div css={about}>
      <AboutContent />
      <img css={profileImgStyle} src={profileImg} alt="" />
    </div>
  );
}

export default About;

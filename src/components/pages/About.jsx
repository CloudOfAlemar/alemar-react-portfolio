/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import common from "../../constants/commonStyles";
import profileImg from "../../assets/me.jpg";
import AboutContent from "./aboutComponents/AboutContent";

const profileImgStyle = css`
  display: block;
  width: 100%;
  border-radius: 50%;
`;

function About() {
  return (
    <section css={common.sectionSpacing}>
      <AboutContent />
      <img css={profileImgStyle} src={profileImg} alt="" />
    </section>
  );
}

export default About;

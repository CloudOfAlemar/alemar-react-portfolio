/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import common from "../../constants/commonStyles";
import profileImg from "../../assets/me.jpg";
import AboutContent from "./aboutComponents/AboutContent";

const profileImgStyle = css`
  display: block;
  width: 100%;
  max-width: 350px;
  margin: auto;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    max-width: 250px;
    margin-left: auto;
    margin-right: 0;
  }
  @media screen and (min-width: 876px) {
    max-width: 375px;
  }
  @media screen and (min-width: 1400px) {
    max-width: 500px;
  }
`;

const aboutContainer = css`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

function About() {
  return (
    <section css={[common.sectionSpacing, common.sideGutters]}>
      <div css={[common.contentContainer, aboutContainer]}>
        <AboutContent />
        <img css={profileImgStyle} src={profileImg} alt="" />
      </div>
    </section>
  );
}

export default About;

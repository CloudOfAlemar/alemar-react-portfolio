/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { utils } from "../../constants/utils";
import common from "../../constants/commonStyles";
import heroImg from "../../assets/hero-image-gengar.svg";
import HeroContent from "./heroAreaComponents/HeroContent";

const heroArea = css`
  padding-top: 6rem;
  padding-bottom: 4rem;
`;

const heroContainer = css`
  max-width: 1440px;
  margin: auto;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const heroImgStyles = css`
  display: block;
  width: 100%;
  max-width: 500px;
  margin: auto;
  @media screen and (min-width: 768px) {
    max-width: 300px;
    margin: 0;
  }
  @media screen and (min-width: 876px) {
    max-width: 450px;
    margin-right: -5rem;
  }
  @media screen and (min-width: 1400px) {
    max-width: 750px;
    margin-left: 10rem;
    margin-right: -8rem;
  }
`;

function HeroArea() {
  return (
    <div css={[heroArea, common.sideGutters]}>
      <div css={[common.contentContainer, heroContainer]}>
        <HeroContent />
        <img css={heroImgStyles} src={heroImg} alt="Hero Image for website" />
      </div>
    </div>
  );
}

export default HeroArea;

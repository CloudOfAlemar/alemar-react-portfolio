/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { utils } from "../../constants/utils";
import heroImg from "../../assets/hero-image-gengar.svg";
import HeroContent from "./heroAreaComponents/HeroContent";

const heroArea = css`
  padding: 8rem ${utils.gutterSm} 4rem;
`;

const heroImgStyles = css`
  display: block;
  width: 100%;
`;

function HeroArea() {
  return (
    <div css={heroArea}>
      <HeroContent />
      <img css={heroImgStyles} src={heroImg} alt="Hero Image for website" />
    </div>
  );
}

export default HeroArea;

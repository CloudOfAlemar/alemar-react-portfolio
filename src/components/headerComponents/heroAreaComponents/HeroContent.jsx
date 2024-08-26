/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../constants/colors";

const heroContent = css`
  max-width: 285px;
  @media screen and (min-width: 768px) {
    max-width: 352px;
  }
  @media screen and (min-width: 1400px) {
    max-width: none;
  }
`;

const heroHeading = css`
  position: relative;
  font-size: 4.5rem;
  line-height: 4.5rem;
  color: ${colors.melon};

  &::before,
  &::after {
    display: block;
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: ${colors.purpleShade};
  }

  &::before {
    content: "Hi I'm";
    margin-bottom: 1.5rem;
  }

  &::after {
    content: "Gearing up to solve the world's issues";
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 5rem;
    line-height: 5rem;
    &::before,
    &::after {
      font-size: 2.2rem;
      line-height: 3.3rem;
    }
  }
  @media screen and (min-width: 1400px) {
    font-size: 10rem;
    line-height: 10rem;
    &::before,
    &::after {
      font-size: 3rem;
      line-height: 4%.5rem;
    }
  }
`;

const headingColorPrimary = css`
  color: ${colors.red};
`;

function HeroContent() {
  return (
    <div css={heroContent}>
      <h1 css={heroHeading}>
        <span css={headingColorPrimary}>Alejandro</span>
        <br />
        Martinez
      </h1>
    </div>
  );
}

export default HeroContent;

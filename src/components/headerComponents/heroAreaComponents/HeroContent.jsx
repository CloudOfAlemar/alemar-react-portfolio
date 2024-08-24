/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../constants/colors";

const heroContent = css`
  max-width: 285px;
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

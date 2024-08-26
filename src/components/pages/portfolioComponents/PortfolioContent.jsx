/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import headingIcon from "../../../assets/heading-icon.svg";
import common from "../../../constants/commonStyles";

const spanGrid = css`
  @media screen and (min-width: 768px) {
    grid-column: span 6;
  }
  @media screen and (min-width: 1400px) {
    grid-column: 1 / span 5;
    margin-bottom: 0;
  }
`;

function PortfolioContent() {
  return (
    <div css={[common.sectionContent, spanGrid]}>
      <div css={common.sectionHeadingArea}>
        <img
          css={common.sectionHeadingIcon}
          src={headingIcon}
          alt="Robot Icon for display."
        />
        <h2 css={common.sectionHeading}>
          Portfol<span>io</span>
        </h2>
      </div>
      <p css={common.sectionParagraph}>
        Check out some of the projects I’ve built, along with the technologies
        that were used.
      </p>
    </div>
  );
}

export default PortfolioContent;

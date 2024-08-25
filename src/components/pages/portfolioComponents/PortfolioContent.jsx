/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../constants/colors";
import headingIcon from "../../../assets/heading-icon.svg";
import common from "../../../constants/commonStyles";

function PortfolioContent() {
  return (
    <div css={common.sectionContent}>
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

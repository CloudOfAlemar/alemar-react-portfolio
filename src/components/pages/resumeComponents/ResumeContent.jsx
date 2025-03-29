/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import headingIcon from "../../../assets/heading-icon.svg";
import common from "../../../constants/commonStyles";

const sectionContentStyles = css`
  max-width: 600px;
  margin: auto;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1200px) {
    max-width: 500px;
  }
`;

function ResumeContent() {
  return (
    <div css={[common.sectionContent, sectionContentStyles]}>
      <div css={common.sectionHeadingArea}>
        <img
          css={common.sectionHeadingIcon}
          src={headingIcon}
          alt="Robot Icon for display."
        />
        <h2 css={common.sectionHeading}>
          Resu<span>me</span>
        </h2>
      </div>
      <p 
        css={common.sectionParagraph}
      >
        Here are the technologies I've worked with, and you can view my{" "}
        <a href="/frontendResume.docx" target="_blank" download="frontendResume.docx">
          resume
        </a>{" "}
        by clicking the link provided.
      </p>
    </div>
  );
}

export default ResumeContent;

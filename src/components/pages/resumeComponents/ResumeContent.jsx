/**@jsxImportSource @emotion/react */
import headingIcon from "../../../assets/heading-icon.svg";
import common from "../../../constants/commonStyles";

function ResumeContent() {
  return (
    <div css={common.sectionContent}>
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
      <p css={common.sectionParagraph}>
        Below are the technologies I've worked with, and you can view my resume
        by clicking the link provided,
      </p>
    </div>
  );
}

export default ResumeContent;

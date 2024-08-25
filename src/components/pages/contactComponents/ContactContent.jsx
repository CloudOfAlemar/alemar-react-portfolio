/**@jsxImportSource @emotion/react */
import headingIcon from "../../../assets/heading-icon.svg";
import common from "../../../constants/commonStyles";

function ContactContent() {
  return (
    <div css={common.sectionContent}>
      <div css={common.sectionHeadingArea}>
        <img
          css={common.sectionHeadingIcon}
          src={headingIcon}
          alt="Robot Icon for display."
        />
        <h2 css={common.sectionHeading}>
          Contact<span>Me</span>
        </h2>
      </div>
      <p css={common.sectionParagraph}>
        Feel free to reach out if you're interested in my work. I'm excited to
        collaborate with an amazing team and bring new ideas to life!
      </p>
    </div>
  );
}

export default ContactContent;

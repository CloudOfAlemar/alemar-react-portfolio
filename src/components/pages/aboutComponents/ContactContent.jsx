/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import headingIcon from "../../../assets/heading-icon.svg";
import common from "../../../constants/commonStyles";
import { colors } from "../../../constants/colors";

const contactParagraph = css`
  max-width: 750px;
  margin: auto;
`;

const emailArea = css`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const emailLink = css`
  font-size: 1.6rem;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const icon = css`
  font-size: 2rem;
  color: ${colors.darkPurple}
  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

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
      <p css={[common.sectionParagraph, contactParagraph]}>
        Feel free to reach out if you're interested in my work. I'm excited to
        collaborate with an amazing team and bring new ideas to life!
      </p>
      <div css={emailArea}>
        <i className="fa-solid fa-envelope" css={icon}></i>
        <a href="mailto: cloudof.alemar@gmail.com" css={emailLink}>cloudof.alemar@gmail.com</a>
      </div>
    </div>
  );
}

export default ContactContent;

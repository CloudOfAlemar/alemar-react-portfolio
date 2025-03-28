/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import headingIcon from "../../../assets/heading-icon.svg";
import common from "../../../constants/commonStyles";

const aboutContent = css`
  @media screen and (min-width: 768px) {
    max-width: 418px;
  }
  @media screen and (min-width: 1400px) {
    max-width: 712px;
  }
`;

const contentParagraph = css`
  text-align: left;
`;

function AboutContent() {
  return (
    <div css={[common.sectionContent, aboutContent]}>
      <div css={common.sectionHeadingArea}>
        <img
          css={[common.sectionHeadingIcon]}
          src={headingIcon}
          alt="Robot Icon for display."
        />
        <h2 css={common.sectionHeading}>
          About <span>Me</span>
        </h2>
      </div>
      <p css={[common.sectionParagraph, contentParagraph]}>
        I'm an aspiring frontend web developer eager to contribute to a collaborative development team. 
        To build a strong foundation in web development, I've created several projects using HTML,
        CSS, and JavaScript, focusing on core principles and best practices.
      </p>
      <p css={[common.sectionParagraph, contentParagraph]}>
        Among my most notable 
        projects are the Habit Tracker and Tech Blog, both of which required frontend and backend
        implementation. You can explore these projects in the portfolio section of my website.
      </p>
      <p css={[common.sectionParagraph, contentParagraph]}>
        I recently earned a Full Stack Web Development Certificate from UC Irvine’s Continuing Education 
        Program. With this certification, my hands-on experience, and a deep passion for lifelong 
        learning, I strive to become a valuable asset to a web development team.
      </p>
    </div>
  );
}

export default AboutContent;

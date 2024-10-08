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
  @media screen and (min-width: 768px) {
    text-align: left;
  }
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
        Hello world, my name is Alejandro Martinez and I’m on my way to becoming
        a web developer. I’ve been learning to code for quite some time now,
        mainly focusing on the fundamentals with HTML, CSS and JavaScript using
        online resources like Udemy and Youtube. <br />
        I’ve built several projects on the Frontend Mentor website that have
        helped reinforce my skills which I will link in the Project section. And
        now I am glad to be taking a course that can hopefully allow me to break
        into the industry. I’m so excited and ready to be a productive part of
        an amazing team.
      </p>
    </div>
  );
}

export default AboutContent;

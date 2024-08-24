/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../constants/colors";
import headingIcon from "../../../assets/heading-icon.svg";

const aboutContent = css`
  margin-bottom: 4rem;
`;

const headingIconStyles = css`
  width: 40px;
`;

const heading = css`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: ${colors.melon};
  span {
    color: ${colors.purpleShade};
  }
`;

const headingArea = css`
  text-align: center;
`;

const paragraph = css`
  font-size: 1.4rem;
  line-height: 2.8rem;
  color: ${colors.purpleShade};
  text-align: center;
`;

function AboutContent() {
  return (
    <div css={aboutContent}>
      <div css={headingArea}>
        <img css={headingIconStyles} src={headingIcon} alt="" />
        <h2 css={heading}>
          About <span>Me</span>
        </h2>
      </div>
      <p css={paragraph}>
        Hello world, my name is Alejandro Martinez and I’m on my way to becoming
        a web developer. I’ve been learning to code for quite some time now,
        mainly focusing on the fundamentals with HTML, CSS and JavaScript using
        online resources like Udemy and Youtube. I’ve built several projects on
        the Frontend Mentor website that have helped reinforce my skills which I
        will link in the Project section. And now I am glad to be taking a
        course that can hopefully allow me to break into the industry. I’m so
        excited and ready to be a productive part of an amazing team.
      </p>
    </div>
  );
}

export default AboutContent;

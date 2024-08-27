/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../constants/colors";

const bubble = css`
  position: relative;
  width: 335px;
  height: 200px;
  overflow: hidden;
  box-shadow: 16px 32px 56px rgba(241, 178, 172, 25%);
  border-radius: 15px;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: auto;
  }
  @media screen and (min-width: 1400px) {
    margin-bottom: 0;
    height: 221px;
  }
`;

const imgStyle = css`
  width: 100%;
`;

const spanGrid = css`
  @media screen and (min-width: 768px) {
    grid-column: span 6;
  }
`;

const projectTitle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  text-decoration: none;
  background-color: ${colors.darkPurple};
  color: ${colors.offWhite};
  padding: 1rem 3rem;
  font-size: 1.8rem;
`;
const githubIcon = css`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${colors.darkPurple};
  color: ${colors.offWhite};
  padding: 1rem 2rem;
  font-size: 2.2rem;
  border-radius: 15px;
`;

function ProjectBubble({ img, column, projectName, live, github }) {
  return (
    <div css={[bubble, spanGrid, column]}>
      <img css={imgStyle} src={img} alt="Project Screenshot" />
      <a css={projectTitle} href={live} target="_blank">
        {projectName}
      </a>
      <a css={githubIcon} href={github} target="_blank">
        <i className="fa-brands fa-square-github"></i>
      </a>
    </div>
  );
}

export default ProjectBubble;

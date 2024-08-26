/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const bubble = css`
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

function ProjectBubble({ img, column }) {
  return (
    <div css={[bubble, spanGrid, column]}>
      <img css={imgStyle} src={img} alt="Project Screenshot" />
    </div>
  );
}

export default ProjectBubble;

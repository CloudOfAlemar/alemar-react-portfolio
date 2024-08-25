/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const bubble = css`
  width: 335px;
  height: 200px;
  overflow: hidden;
  box-shadow: 16px 32px 56px rgba(241, 178, 172, 25%);
  border-radius: 15px;
  margin-bottom: 4rem;
`;

const imgStyle = css`
  width: 100%;
`;

function ProjectBubble({ img }) {
  return (
    <div css={bubble}>
      <img css={imgStyle} src={img} alt="Project Screenshot" />
    </div>
  );
}

export default ProjectBubble;

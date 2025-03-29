/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import common from "../../constants/commonStyles";
import ResumeContent from "./resumeComponents/ResumeContent";
import FrontendContent from "./resumeComponents/FrontendContent";
import BackendContent from "./resumeComponents/BackendContent";

import blocksImg from "../../assets/blocks-image.svg";
import blocksImg2 from "../../assets/blocks-image-2.svg";

const resumeGrid = css`
  display: grid;
  gap: 8rem;
  max-width: 1440px;
  margin: auto;
  position: relative;
`;
const content1 = css`
  @media screen and (min-width: 1200px) {
    order: 1
  }
`;

const content2 = css`
  @media screen and (min-width: 1200px) {
    order: 2
  }
`;
const content3 = css`
  @media screen and (min-width: 1200px) {
    order: 3
  }
`;

const blocksImgStyles = css`
  position: absolute;
  bottom: -100px;
  left: 0;
  transform: rotate(-15deg) scale(.9);
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

const blocksImg2Styles = css`
  position: absolute;
  top: -100px;
  right: 0;
  transform: scale(.9);
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;


function Resume() {
  return (
    <section css={common.sectionSpacing}>
      <div css={resumeGrid}>
        <div css={content2}>
          <ResumeContent />
        </div>
        <div css={content1}>
          <FrontendContent />
        </div>
        <div css={content3}>
          <BackendContent />
        </div>
        <img css={blocksImgStyles} src={blocksImg} alt="An image of shapes for design purposes." />
        <img css={blocksImg2Styles} src={blocksImg2} alt="An image of shapes for design purposes." />
      </div>
    </section>
  );
}

export default Resume;

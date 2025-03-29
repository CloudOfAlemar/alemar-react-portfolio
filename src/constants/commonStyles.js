/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "./colors";
import { utils } from "./utils";

const commonStyles = {
  sectionSpacing: css`
    padding: 4rem ${utils.gutterSm};
  `,
  sectionContent: css`
    margin-bottom: 4rem;
  `,
  sectionHeadingArea: css`
    text-align: center;
    margin-bottom: 1rem;
  `,
  sectionHeadingIcon: css`
    width: 40px;
    @media screen and (min-width: 1400px) {
      width: 75px;
    }
  `,
  sectionHeading: css`
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: ${colors.melon};
    span {
      color: ${colors.purpleShade};
    }
    @media screen and (min-width: 1400px) {
      font-size: 4.5rem;
      line-height: 6.8rem;
    }
  `,
  sectionParagraph: css`
    font-size: 1.4rem;
    line-height: 2.8rem;
    color: ${colors.purpleShade};
    margin-bottom: 1.5rem;
    text-align: center;
    @media screen and (min-width: 1400px) {
      font-size: 1.8rem;
      line-height: 3.2rem;
    }
  `,
  contentContainer: css`
    /* max-width: 860px;
    margin: auto; */
  `,
  sideGutters: css`
    padding-right: ${utils.gutterSm};
    padding-left: ${utils.gutterSm};
    @media screen and (min-width: 768px) {
      padding-left: 4rem;
      padding-right: 4rem;
    }
    @media screen and (min-width: 1400px) {
      padding-left: 10rem;
      padding-right: 10rem;
    }
  `,
  pillGrid: css`
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 2rem;
      max-width: 728px;
      margin: auto;
    }
  `,
  pill1: css`
    @media screen and (min-width: 768px) {
      grid-column: 5/7
    }
  `,
  pill2: css`
    @media screen and (min-width: 768px) {
      grid-column: 7/9
    }
  `,
  pill3: css`
    @media screen and (min-width: 768px) {
      grid-column: 4/6
    }
  `,
  pill4: css`
    @media screen and (min-width: 768px) {
      grid-column: 6/8
    }
  `,
  pill5: css`
    @media screen and (min-width: 768px) {
      grid-column: 8/10
    }
  `,
  pill6: css`
    @media screen and (min-width: 768px) {
      grid-column: 5/7
    }
  `,
  pill7: css`
    @media screen and (min-width: 768px) {
      grid-column: 7/9
    }
  `
};

export default commonStyles;

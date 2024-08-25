/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "./colors";

const commonStyles = {
  sectionContent: css`
    margin-bottom: 4rem;
  `,
  sectionHeadingArea: css`
    text-align: center;
    margin-bottom: 1rem;
  `,
  sectionHeadingIcon: css`
    width: 40px;
  `,
  sectionHeading: css`
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: ${colors.melon};
    span {
      color: ${colors.purpleShade};
    }
  `,
  sectionParagraph: css`
    font-size: 1.4rem;
    line-height: 2.8rem;
    color: ${colors.purpleShade};
    text-align: center;
  `,
};

export default commonStyles;

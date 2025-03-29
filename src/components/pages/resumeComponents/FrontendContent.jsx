/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../constants/colors";
import common from "../../../constants/commonStyles";

import Pill from "./Pill";

const heading = css`
  color: ${colors.pink};
  font-size: 2.4rem;
  line-height: 3.6rem;
  text-align: center;
  margin-bottom: 2rem;
  span {
    color: ${colors.melon};
  }
  @media screen and (min-width: 768px) {
    max-width: 728px;
    margin: 0 auto 2rem;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 0;
  }
`;

const frontendPillColor = colors.melon;

const pillGrid = css`
  @media screen and (min-width: 1200px) {
    margin-left: 0;
  }
`;

function FrontendContent() {
  return (
    <div>
      <h3 css={heading}>
        Frontend <span>Proficiencies</span>
      </h3>
      <div css={[common.pillGrid, pillGrid]}>
        <Pill pillName="HTML" shadowColor={frontendPillColor} pillPosition={common.pill1}/>
        <Pill pillName="CSS" shadowColor={frontendPillColor} pillPosition={common.pill2}/>
        <Pill pillName="Javascript" shadowColor={frontendPillColor} pillPosition={common.pill3}/>
        <Pill pillName="Sass" shadowColor={frontendPillColor} pillPosition={common.pill4}/>
        <Pill pillName="Responsive Design" shadowColor={frontendPillColor} pillPosition={common.pill5}/>
        <Pill pillName="React" shadowColor={frontendPillColor} pillPosition={common.pill6}/>
        <Pill pillName="Bootstrap" shadowColor={frontendPillColor} pillPosition={common.pill7}/>
      </div>
    </div>
  );
}

export default FrontendContent;

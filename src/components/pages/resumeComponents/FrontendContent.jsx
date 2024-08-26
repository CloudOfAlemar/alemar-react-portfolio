/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../constants/colors";

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
`;

const frontendPillColor = colors.melon;

function FrontendContent() {
  return (
    <div>
      <h3 css={heading}>
        Frontend <span>Proficiencies</span>
      </h3>
      <div>
        <Pill pillName="HTML" shadowColor={frontendPillColor} />
        <Pill pillName="CSS" shadowColor={frontendPillColor} />
        <Pill pillName="Javascript" shadowColor={frontendPillColor} />
        <Pill pillName="JQuery" shadowColor={frontendPillColor} />
        <Pill pillName="Responsive Design" shadowColor={frontendPillColor} />
        <Pill pillName="React" shadowColor={frontendPillColor} />
        <Pill pillName="Bootstrap" shadowColor={frontendPillColor} />
      </div>
    </div>
  );
}

export default FrontendContent;

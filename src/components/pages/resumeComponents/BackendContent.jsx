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
    color: ${colors.purplePrimary};
  }
  @media screen and (min-width: 768px) {
    max-width: 728px;
    margin: 0 auto 2rem;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 0;
  }
`;

const backendPillColor = colors.purplePrimary;

const pillGrid = css`
  @media screen and (min-width: 1200px) {
    margin-right: 0;
  }
`;

function BackendContent() {
  return (
    <div>
      <h3 css={heading}>
        Backend <span>Proficiencies</span>
      </h3>
      <div css={[common.pillGrid, pillGrid]}>
        <Pill pillName="APIS" shadowColor={backendPillColor} pillPosition={common.pill1}/>
        <Pill pillName="Node JS" shadowColor={backendPillColor} pillPosition={common.pill2}/>
        <Pill pillName="Express" shadowColor={backendPillColor} pillPosition={common.pill3}/>
        <Pill pillName="MySQL/Sequelize" shadowColor={backendPillColor} pillPosition={common.pill4}/>
        <Pill pillName="Rest" shadowColor={backendPillColor} pillPosition={common.pill5}/>
        <Pill pillName="MongoDB/Mongoose" shadowColor={backendPillColor} pillPosition={common.pill6}/>
        <Pill pillName="Handlebars" shadowColor={backendPillColor} pillPosition={common.pill7}/>
      </div>
    </div>
  );
}

export default BackendContent;

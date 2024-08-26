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
    color: ${colors.purplePrimary};
  }
`;

const backendPillColor = colors.purplePrimary;

function BackendContent() {
  return (
    <div>
      <h3 css={heading}>
        Backend <span>Proficiencies</span>
      </h3>
      <div>
        <Pill pillName="APIS" shadowColor={backendPillColor} />
        <Pill pillName="Node JS" shadowColor={backendPillColor} />
        <Pill pillName="Express" shadowColor={backendPillColor} />
        <Pill pillName="MySQL/Sequelize" shadowColor={backendPillColor} />
        <Pill pillName="Rest" shadowColor={backendPillColor} />
        <Pill pillName="MongoDB/Mongoose" shadowColor={backendPillColor} />
        <Pill pillName="GraphQL" shadowColor={backendPillColor} />
      </div>
    </div>
  );
}

export default BackendContent;

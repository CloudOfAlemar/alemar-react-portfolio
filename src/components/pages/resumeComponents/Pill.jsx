/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../constants/colors";

const pillStyle = css`
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 3.2rem;
  color: ${colors.purplePrimary};
  padding: 0.5rem 0rem;
  border-radius: 100px;
  width: 164px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

function Pill({ pillName, shadowColor, pillPosition }) {
  return (
    <div css={[pillStyle, pillPosition]} style={{ boxShadow: `10px 10px 24px ${shadowColor}` }}>
      {pillName}
    </div>
  );
}

export default Pill;

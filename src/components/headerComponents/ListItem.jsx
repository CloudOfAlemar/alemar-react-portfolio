/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../constants/colors";

const navLink = css`
  color: ${colors.purpleShade};
  text-decoration: none;
  display: block;
  text-align: right;
  padding: 1rem 0rem;
  font-size: 1.6rem;
`;

function ListItem({ listTitle }) {
  return (
    <li>
      <a href="" css={navLink}>
        {listTitle}
      </a>
    </li>
  );
}

export default ListItem;

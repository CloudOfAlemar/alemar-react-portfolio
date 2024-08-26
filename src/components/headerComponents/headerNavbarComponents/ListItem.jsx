/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../constants/colors";
import { Link, useLocation } from "react-router-dom";

const navLink = css`
  color: ${colors.purpleShade};
  text-decoration: none;
  display: block;
  text-align: right;
  padding: 1rem 0rem;
  font-size: 1.6rem;
  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 3rem;
    line-height: 4.5rem;
    padding: 0;
  }
`;

const activeNavLink = css`
  font-weight: 800;
  color: ${colors.darkPurple};
`;

function ListItem({ listTitle, path }) {
  const currentPage = useLocation().pathname;
  return (
    <li>
      <Link to={path} css={[navLink, currentPage === path && activeNavLink]}>
        {listTitle}
      </Link>
    </li>
  );
}

export default ListItem;

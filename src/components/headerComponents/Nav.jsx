/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../constants/colors";
import { utils } from "../../constants/utils";
import ListItem from "./ListItem";

const nav = css`
  position: absolute;
  top: ${utils.gutterSm};
  right: ${utils.gutterSm};
`;

const list = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

function Nav() {
  return (
    <nav css={nav}>
      <ul css={list}>
        <ListItem listTitle="About Me" />
        <ListItem listTitle="Portfolio" />
        <ListItem listTitle="Contact Me" />
        <ListItem listTitle="Resume" />
      </ul>
    </nav>
  );
}

export default Nav;

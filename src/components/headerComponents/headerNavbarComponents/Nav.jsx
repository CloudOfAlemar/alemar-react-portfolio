/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { utils } from "../../../constants/utils";
import ListItem from "./ListItem";

const nav = css`
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (min-width: 1400px) {
    position: relative;
  }
`;

const list = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1400px) {
    width: 721px;
    justify-content: space-between;
  }
`;

function Nav() {
  return (
    <nav css={nav}>
      <ul css={list}>
        <ListItem listTitle="About Me" path="/" />
        <ListItem listTitle="Portfolio" path="/portfolio" />
        <ListItem listTitle="Contact Me" path="/contact" />
        <ListItem listTitle="Resume" path="/resume" />
      </ul>
    </nav>
  );
}

export default Nav;

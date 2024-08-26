/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { utils } from "../../constants/utils";
import common from "../../constants/commonStyles";
import project1 from "../../assets/bmi-calculator-img.png";
import project2 from "../../assets/equilizer-img.png";
import project3 from "../../assets/meet-landing-page-img.png";
import project4 from "../../assets/skilled-e-learning-img.png";
import project5 from "../../assets/workit-landing-page-img.png";
import PortfolioContent from "./portfolioComponents/PortfolioContent";
import ProjectBubble from "./portfolioComponents/ProjectBubble";

const gridContainer = css`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2rem;
    max-width: 728px;
    margin: auto;
  }
  @media screen and (min-width: 1400px) {
    max-width: 1312px;
    grid-gap: 4rem;
  }
`;

const projBubble1 = css`
  @media screen and (min-width: 1400px) {
    grid-column: 8 / span 4;
  }
`;
const projBubble2 = css`
  @media screen and (min-width: 1400px) {
    grid-column: 5 / span 4;
  }
`;
const projBubble3 = css`
  @media screen and (min-width: 1400px) {
    grid-column: 9 / span 4;
  }
`;
const projBubble4 = css`
  @media screen and (min-width: 1400px) {
    grid-column: 3 / span 4;
  }
`;
const projBubble5 = css`
  @media screen and (min-width: 1400px) {
    grid-column: 7 / span 4;
  }
`;

function Portfolio() {
  return (
    <section css={[common.sectionSpacing]}>
      <div css={gridContainer}>
        <PortfolioContent />
        <ProjectBubble img={project1} column={projBubble1} />
        <ProjectBubble img={project2} column={projBubble2} />
        <ProjectBubble img={project3} column={projBubble3} />
        <ProjectBubble img={project4} column={projBubble4} />
        <ProjectBubble img={project5} column={projBubble5} />
      </div>
    </section>
  );
}

export default Portfolio;

/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { utils } from "../../constants/utils";
import PortfolioContent from "./portfolioComponents/PortfolioContent";
import ProjectBubble from "./portfolioComponents/ProjectBubble";
import project1 from "../../assets/bmi-calculator-img.png";
import project2 from "../../assets/equilizer-img.png";
import project3 from "../../assets/meet-landing-page-img.png";
import project4 from "../../assets/skilled-e-learning-img.png";
import project5 from "../../assets/workit-landing-page-img.png";

const portfolio = css`
  padding: 4rem ${utils.gutterSm};
`;

function Portfolio() {
  return (
    <div css={portfolio}>
      <PortfolioContent />
      <ProjectBubble img={project1} />
      <ProjectBubble img={project2} />
      <ProjectBubble img={project3} />
      <ProjectBubble img={project4} />
      <ProjectBubble img={project5} />
    </div>
  );
}

export default Portfolio;

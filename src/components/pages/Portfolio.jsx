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

function Portfolio() {
  return (
    <section css={common.sectionSpacing}>
      <div>
        <PortfolioContent />
        <ProjectBubble img={project1} />
        <ProjectBubble img={project2} />
        <ProjectBubble img={project3} />
        <ProjectBubble img={project4} />
        <ProjectBubble img={project5} />
      </div>
    </section>
  );
}

export default Portfolio;

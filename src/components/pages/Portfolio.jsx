/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { utils } from "../../constants/utils";
import common from "../../constants/commonStyles";
import project1 from "../../assets/bmi-calculator-img.png";
import project2 from "../../assets/equilizer-img.png";
import project3 from "../../assets/meet-landing-page-img.png";
import project4 from "../../assets/skilled-e-learning-img.png";
import project5 from "../../assets/workit-landing-page-img.png";
import project6 from "../../assets/tech-blog-screenshot.png";
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
const projBubble6 = css`
  @media screen and (min-width: 1400px) {
    grid-column: 1 / span 4;
  }
`;

function Portfolio() {
  return (
    <section css={[common.sectionSpacing]}>
      <div css={gridContainer}>
        <PortfolioContent />
        <ProjectBubble
          img={project1}
          column={projBubble1}
          projectName="BMI Calculator"
          live="https://cloudofalemar.github.io/BMICalculator/"
          github="https://github.com/CloudOfAlemar/BMICalculator"
        />
        <ProjectBubble
          img={project6}
          column={projBubble6}
          projectName="Techblog"
          live="https://tech-blog-jtbf.onrender.com"
          github="https://github.com/CloudOfAlemar/tech-blog"
        />
        <ProjectBubble
          img={project2}
          column={projBubble2}
          projectName="Equilizer Landing Page"
          live="https://cloudofalemar.github.io/EqualizerLandingPage/"
          github="https://github.com/CloudOfAlemar/EqualizerLandingPage"
        />
        <ProjectBubble
          img={project3}
          column={projBubble3}
          projectName="Meet Landing Page"
          live="https://cloudofalemar.github.io/MeetLandingPage/"
          github="https://github.com/CloudOfAlemar/MeetLandingPage"
        />
        <ProjectBubble
          img={project4}
          column={projBubble4}
          projectName="Skilled Landing Page"
          live="https://cloudofalemar.github.io/SkilledELearningLandingPage/"
          github="https://github.com/CloudOfAlemar/SkilledELearningLandingPage"
        />
        <ProjectBubble
          img={project5}
          column={projBubble5}
          projectName="Workit Landing Page"
          live="https://cloudofalemar.github.io/WorkitLandingPage/"
          github="https://github.com/CloudOfAlemar/WorkitLandingPage"
        />
      </div>
    </section>
  );
}

export default Portfolio;

/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import common from "../../constants/commonStyles";
import ResumeContent from "./resumeComponents/ResumeContent";
import FrontendContent from "./resumeComponents/FrontendContent";
import BackendContent from "./resumeComponents/BackendContent";

function Resume() {
  return (
    <section css={common.sectionSpacing}>
      <div>
        <div>
          <ResumeContent />
        </div>
        <div>
          <FrontendContent />
        </div>
        <div>
          <BackendContent />
        </div>
      </div>
    </section>
  );
}

export default Resume;

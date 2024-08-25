/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import common from "../../constants/commonStyles";

import InfoArea from "./contactComponents/InfoArea";

function Contact() {
  return (
    <section css={common.sectionSpacing}>
      <div>
        <InfoArea />
      </div>
    </section>
  );
}

export default Contact;

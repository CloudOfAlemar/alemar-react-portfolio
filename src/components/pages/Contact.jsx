/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import common from "../../constants/commonStyles";

import InfoArea from "./contactComponents/InfoArea";

const container = css`
  max-width: 525px;
  margin: auto;
`;

function Contact() {
  return (
    <section css={[common.sectionSpacing]}>
      <div css={container}>
        <InfoArea />
      </div>
    </section>
  );
}

export default Contact;

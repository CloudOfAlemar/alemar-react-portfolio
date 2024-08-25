/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../constants/colors";

const inputStyle = css`
  background-color: ${colors.offWhite};
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  display: block;
  width: 100%;
  color: ${colors.purpleShade};
  margin-bottom: 2rem;
  font-size: 1.4rem;
  &::placeholder {
    color: ${colors.purpleShade};
  }
`;

const formBtn = css`
  background-color: ${colors.darkPurple};
  color: ${colors.offWhite};
  border: none;
  padding: 1rem 2rem;
  display: block;
  width: 100%;
  border-radius: 5px;
  font-size: 1.6rem;
  line-height: 3.2rem;
  font-weight: 500;
`;

function ContactForm() {
  return (
    <form action="">
      <input
        css={inputStyle}
        type="text"
        name="inputName"
        id="inputName"
        placeholder="Name"
      />

      <input
        css={inputStyle}
        type="email"
        name="inputEmail"
        id="inputEmail"
        placeholder="Email"
      />
      <textarea
        css={inputStyle}
        name="inputMessage"
        id="inputMessage"
        cols="30"
        rows="10"
        defaultValue="Message"
      ></textarea>
      <button css={formBtn} type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;

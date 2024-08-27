/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../../constants/colors";
import { useState } from "react";

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

const message = css`
  font-size: 1.6rem;
  color: ${colors.red};
`;

function ContactForm() {
  const [messageValue, setMessage] = useState("");
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleBlur = (e) => {
    if (e.target.value.trim() === "") {
      setMessage(`${e.target.name} field is required.`);
    } else {
      setMessage("");
    }
  };

  const handleEmailChange = (e) => {
    if (e.target.value.trim() === "") {
      setMessage(`${e.target.name} field is required.`);
    } else if (!validateEmail(e.target.value.trim())) {
      setMessage("Not a valid email.");
    } else {
      setMessage("");
    }
  };

  return (
    <div>
      <p css={message}>{messageValue}</p>
      <form action="">
        <input
          css={inputStyle}
          type="text"
          name="name"
          id="inputName"
          placeholder="Name"
          onBlur={handleBlur}
        />

        <input
          css={inputStyle}
          type="email"
          name="email"
          id="inputEmail"
          placeholder="Email"
          onBlur={handleBlur}
          onChange={handleEmailChange}
        />
        <textarea
          css={inputStyle}
          name="message"
          id="inputMessage"
          cols="30"
          rows="10"
          placeholder="Message"
          onBlur={handleBlur}
        ></textarea>
        <button css={formBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

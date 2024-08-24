/**@jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 0.625rem;
            font-family: "Poppins", sans-serif;
          }
          body {
            margin: 0;
          }
        `}
      />
      <Header />
    </>
  );
}

export default App;

/**@jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import Header from "./components/Header";
import About from "./components/pages/About";

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
          h2 {
            margin: 0;
          }
        `}
      />
      <Header />
      <main>
        <About />
      </main>
    </>
  );
}

export default App;

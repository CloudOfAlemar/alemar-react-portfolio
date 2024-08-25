/**@jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import Header from "./components/Header";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html {
            font-size: 0.625rem;
            font-family: "Poppins", sans-serif;
          }
          body {
            margin: 0;
          }
          h2,
          p {
            margin: 0;
          }
          input,
          textarea {
            font-family: "Poppins", sans-serif;
          }
        `}
      />
      <Header />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

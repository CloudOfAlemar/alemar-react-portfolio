/**@jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <Router>
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
          h1,
          h2,
          h3,
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
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

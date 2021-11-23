import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <About />
          <MyProjects />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

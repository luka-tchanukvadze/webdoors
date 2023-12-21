import React from "react";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import News from "./sections/News";

function MainInfo() {
  return (
    <section>
      <Services />
      <Projects />
      <News />
    </section>
  );
}

export default MainInfo;

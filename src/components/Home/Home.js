import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";

function Home() {
  return (
    <div className="scroll">
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </div>
  );
}

export default Home;

import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

function Home() {
  return (
    <div className="scroll">
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  );
}

export default Home;

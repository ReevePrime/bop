import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="scroll">
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <Footer />
    </div>
  );
}

export default Home;

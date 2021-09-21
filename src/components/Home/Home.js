import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="home">
      <PageOne />
      <PageTwo />
      <PageThree />
      <Footer />
    </div>
  );
}

export default Home;

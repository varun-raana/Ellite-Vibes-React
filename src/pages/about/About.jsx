import React from "react";
import AboutHeader from "../../components/header/AboutHeader";
import Navbar from "../../components/navbar/Navbar";
import Services from "../../components/services/Services";
import WhyChooseUs from "../../components/services/WhyChooseUs";

function About() {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <div className=" bg-gray-900">
        <Services />
        <WhyChooseUs />
      </div>
    </div>
  );
}

export default About;

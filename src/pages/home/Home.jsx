import React from "react";
import Brands from "../../components/brands/Brands";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Partners from "../../components/partners/Partners";
import Socials from "../../components/social/Socials";
import Subscriber from "../../components/subscriber/Subscriber";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Header />
        <Brands />
        <Subscriber />
        <Partners />
        <Socials />
      </div>
    </>
  );
}

export default Home;

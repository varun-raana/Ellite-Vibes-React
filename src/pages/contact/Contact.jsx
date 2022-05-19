import React from "react";
import Forms from "../../components/forms/Forms";
import Map from "../../components/map/Map";
import Navbar from "../../components/navbar/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="h-[11vh] bg-gray-900"></div>
      <Map />
      <div className="form py-24 p-3">
        <Forms />
      </div>
    </div>
  );
}

export default Contact;

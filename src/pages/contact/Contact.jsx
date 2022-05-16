import React from "react";
import Forms from "../../components/forms/Forms";
import Map from "../../components/map/Map";
import Navbar from "../../components/navbar/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="h-20 bg-gray-900 bg-opacity-60"></div>
      <Map />
      <div className="form lg:p-5 p-3">
        <Forms />
      </div>
    </div>
  );
}

export default Contact;

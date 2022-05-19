import React from "react";

function Map() {
  return (
    <div className="map relative">
      <div className="absolute bg-gray-900  top-0 left-0 h-full w-full bg-blend-multiply bg-opacity-40  pointer-events-none"></div>
      <iframe
        className="h-[450px] w-full"
        title="Corporate address"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.450611678965!2d73.94747825047631!3d18.55371277294044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c4ecef620d%3A0x2bcf427dd5b58b7b!2sGlobal%20Business%20Hub!5e0!3m2!1sen!2sin!4v1652420623583!5m2!1sen!2sin`}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* <!-- =================== COPYRIGHT SECTTION ========================== --> */}
      <div className="text-white font-medium border-t border-gray-800 border-opacity-40 text-opacity-30 capitalize text-center p-4 bg-gray-900 tracking-widest">
        Copyright&nbsp;
        <Link
          className="text-pink-600  tracking-wider capitalize font-semibold"
          to="/">
          elitevibes.in
        </Link>
        &nbsp;Pvt Ltd. {new Date(Date.now()).getUTCFullYear()}
      </div>
      {/* <!-- ============================ END ============================ --> */}
    </div>
  );
}

export default Footer;

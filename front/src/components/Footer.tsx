import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-white text-xl py-5 text-center flex">
        <div className="w-1/3">
          <p className="mb-10">Excursions</p>
          <a href="/">What we offer</a>
        </div>
        <div className="w-1/3">
          <p className="mb-10">About us</p>
          <a href="/about">Our vision</a>
          <div className="mt-5 text-sm"><a href="techin.lt">2025 @Techin</a></div>
        </div>
        <div className="w-1/3">
          <p className="mb-10">Contacts</p>
          <a href="mailto:IjR5K@example.com">Contact us</a>
        </div>
      </div>
    </>
  );
}
export default Footer;

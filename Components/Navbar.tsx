import React from "react";

const Navbar = () => {
  return (
    <div className="mb-3 mt-1 mr-6 flex gap-2">
      <img src="/logo.png" alt="logo" />
      <h1 className="mt-2 mr-1 ">
        <span className="text-2xl">Zakat</span> <br /> Calculator
      </h1>
    </div>
  );
};

export default Navbar;

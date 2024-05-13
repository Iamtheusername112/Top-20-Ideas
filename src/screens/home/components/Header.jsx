import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center shadow-2xl p-5 border rounded-lg">
      <button className="btn btn-primary btn-sm md:btn-md">+ New Idea</button>
      <h2 className="font-bold text-sm md:text-2xl">Top 20 Ideas</h2>
      <div className="flex gap-2 items-center">
        <h1 className="font-bold text-sm md:text-2xl">IDEA</h1>
      </div>
    </div>
  );
};

export default Header;

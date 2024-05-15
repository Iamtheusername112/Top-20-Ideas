import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center shadow-2xl p-5 border rounded-lg">
      <button
        onClick={() => navigation("/new")}
        className="btn btn-primary btn-sm md:btn-md"
      >
        + New Idea
      </button>
      <h2 className="font-bold text-sm md:text-2xl">Top 20 Ideas</h2>
      <div className="flex gap-2 items-center">
        <h1 className="font-bold text-sm md:text-2xl">
          <img src="/logo1.svg" alt="logo" />
        </h1>
      </div>
    </div>
  );
};

export default Header;

import { Flame, Sparkles, Trophy } from "lucide-react";
import React, { useEffect, useState } from "react";
//import { useLocation } from "react-router-dom";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState();

  return (
    <div role="tablist" className="tabs tabs-bordered">
      <a
        role="tab"
        href="/#hot"
        className={`tab text-lg font-bold ${activeTab === 0 && "tab-active"}`}
        onClick={() => setActiveTab(0)}
      >
        <Flame className="flex text-red-700" /> Hot
      </a>

      <a
        role="tab"
        href="/#new"
        className={`tab text-lg font-bold ${activeTab === 1 && "tab-active"}`}
        onClick={() => setActiveTab(1)}
      >
        <Sparkles className="flex text-primary" /> New
      </a>

      <a
        role="tab"
        href="/#top"
        className={`tab text-lg font-bold ${activeTab === 2 && "tab-active"}`}
        onClick={() => setActiveTab(2)}
      >
        <Trophy className="text-secondary" />
        Top
      </a>
    </div>
  );
};

export default Tabs;

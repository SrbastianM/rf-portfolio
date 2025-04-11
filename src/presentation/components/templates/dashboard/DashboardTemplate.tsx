import React from "react";
import { DashboardTemplateProps } from "./DashboardTemplateProps";
import HeroSection from "../../organism/hero-section/HeroSection";
import Card from "../../organism/card/Card";
import { cardInf } from "../../../../data/cardInf";

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <HeroSection />  
        <Card cardInfo={cardInf}/>
        <main className="flex-1 bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardTemplate;
import React from "react";
import { DashboardTemplateProps } from "./DashboardTemplateProps";
import HeroSection from "../../organism/hero-section/HeroSection";
import Card from "../../organism/card/Card";

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children }) => {
  const test = 'Hello to everyone my name is Sebastian a software developer who enjoys the open source and constantly learn about the internet and how is transforming around the time'
  const titleTest = "Test"
  return (
    <div className="flex min-h-screen flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <HeroSection />  
        <div className="flex flex-row gap-3 justify-evenly bg-neutral-100">
          <Card title={titleTest} text={test}/>
          <Card title={titleTest} text={test}/>
          <Card title={titleTest} text={test}/>
        </div>
       
        <main className="flex-1 bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardTemplate;
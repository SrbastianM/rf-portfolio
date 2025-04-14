import React from 'react';
import { DashboardTemplateProps } from './DashboardTemplateProps';
import HeroSection from '../../organism/hero-section/HeroSection';
import Card from '../../organism/card/Card';
import CardProjects from '../../organism/card-projects/CardProjects';
import { cardInf } from '../../../../data/cardSkillInf';
import Title from '../../atoms/title/Title';

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col">
        <HeroSection />
        <Card cardInfo={cardInf} />
        <main className="flex-1 bg-gray-100 p-6">
          <br />
          <Title text="PROJECTS" className="text-7xl" />
          {children}
          <CardProjects />
        </main>
      </div>
    </div>
  );
};

export default DashboardTemplate;

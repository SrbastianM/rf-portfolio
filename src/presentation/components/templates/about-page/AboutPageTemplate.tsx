import React from 'react';
import { AboutPageTemplateProps } from './AboutPageTemplateProps';
import HeroSection from '../../organism/hero-section/HeroSection';
import { aboutInfo } from '../../../../data/aboutInfo';

const AboutPageTemplate: React.FC<AboutPageTemplateProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 flex flex-col bg-neutral-100">
        <HeroSection items={aboutInfo} />
        <main className="flex-1 bg-gray-100 p-6">
          <br />
          {children}
        </main>
      </div>
    </div>
  );
};

export default AboutPageTemplate;

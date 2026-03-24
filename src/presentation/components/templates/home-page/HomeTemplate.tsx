import React from 'react';
import HeroSection from '../../organism/hero-section/HeroSection';
import { HomeTemplateProps } from './HomeTemplateProps';
import { homeInfo } from '../../../../data/homeInfo';

const HomeTemplate: React.FC<HomeTemplateProps> = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 flex flex-col mt-50">
        <HeroSection items={homeInfo} />
        <main className="flex-1 p-6"></main>
      </div>
    </div>
  );
};

export default HomeTemplate;

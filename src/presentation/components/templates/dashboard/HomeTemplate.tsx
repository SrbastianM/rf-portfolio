import React from 'react';
import HeroSection from '../../organism/hero-section/HeroSection';
import Card from '../../organism/card/Card';
import { cardInf } from '../../../../data/cardSkillInf';
import { HomeTemplateProps } from './HomeTemplateProps';
import { homeInfo } from '../../../../data/homeInfo';

const HomeTemplate: React.FC<HomeTemplateProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 flex flex-col bg-neutral-100">
        <HeroSection items={homeInfo} />
        <Card cardInfo={cardInf} />
        {/* <SliderLanguages languages={sliderItems} /> */}
        <main className="flex-1 bg-gray-100 p-6">
          <br />
          {children}
        </main>
      </div>
    </div>
  );
};

export default HomeTemplate;

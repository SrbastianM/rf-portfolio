import React from 'react';
import HeroSection from '../../organism/hero-section/HeroSection';
import Card from '../../organism/card/Card';
import CardProjects from '../../organism/card-projects/CardProjects';
import Title from '../../atoms/title/Title';
import SliderLanguages from '../../organism/slider-languages/SliderLanguages';
import { cardInf } from '../../../../data/cardSkillInf';
import { AboutTemplateProps } from './AboutTemplateProps';
import { sliderItems } from '../../../../data/sliderItems';

const AboutTemplate: React.FC<AboutTemplateProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 flex flex-col bg-neutral-100">
        <HeroSection />
        <Card cardInfo={cardInf} />
        <Title text="Languages I use" className="text-7xl mt-10" />
        <SliderLanguages languages={sliderItems} />
        <main className="flex-1 bg-gray-100 p-6">
          <br />
          <Title text="Projects" className="text-7xl" />
          {children}
          <CardProjects />
        </main>
      </div>
    </div>
  );
};

export default AboutTemplate;

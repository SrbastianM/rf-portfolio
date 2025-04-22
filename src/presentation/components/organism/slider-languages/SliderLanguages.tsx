import React from 'react';
import { SliderLanguagesProps } from './SliderLanguagesProps';
import { useSlideNavigation } from '../../../hooks/useSlideNavigation';
import { useSliderAnimation } from '../../../hooks/useSliderAnimation';
import SliderControls from '../../atoms/slider-controls/SliderControls';
import SliderElements from '../../molecules/slider-elements/SliderElements';
import DotsIndicator from '../../atoms/dots-indicator/DotsIndicator';

type LanguagesProps = {
  languages: SliderLanguagesProps[];
};

const SliderLanguages: React.FC<LanguagesProps> = ({ languages }) => {
  const { activeIndex, nextSlide, prevSlide, goToSlide } = useSlideNavigation(languages.length);
  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <div className="w-full px-12">
        <div className="absolute left-10 mt-16">
          <SliderControls direction="prev" onClick={prevSlide} />
        </div>
        <div className="absolute right-10 mt-16">
          <SliderControls direction="next" onClick={nextSlide} />
        </div>
        {languages.map((languages, index) => (
          <SliderElements
            key={languages.id}
            color={languages.color}
            icon={languages.icon}
            description={languages.description}
            isActive={index === activeIndex}
          />
        ))}
      </div>
      <DotsIndicator total={languages.length} actual={activeIndex} onSelect={goToSlide} />
    </div>
  );
};

export default SliderLanguages;

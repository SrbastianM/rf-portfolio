import Image from '../../atoms/image/Image';
import TextGroup from '../../molecules/text-group/TextGroup';
import { HeroSectionProps } from './HeroSectionProps';

const HeroSection: React.FC<HeroSectionProps> = ({ items, className = '' }) => {
  return (
    <section className={`flex flex-col w-full px-4 py-8 md:px-8 md:py-16 ${className}`}>
      {items.map((item, index) => (
        <div
          key={item.textGroup.paragraph.id || index}
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
            items-center justify-center gap-6 md:gap-12 lg:gap-20 mb-16 last:mb-0`}
        >
          <div className="w-full md:w-1/2">
            <TextGroup key={index} {...item.textGroup} />
          </div>

          {item.image && (
            <div className="hidden md:flex w-full md:w-1/2 mt-8 md:mt-0 justify-center">
              <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                <Image className="rounded-lg shadow-md w-full h-auto" {...item.image} />
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default HeroSection;

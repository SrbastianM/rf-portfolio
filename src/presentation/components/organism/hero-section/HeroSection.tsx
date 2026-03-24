import Image from '../../atoms/image/Image';
import TextGroup from '../../molecules/text-group/TextGroup';
import { HeroSectionProps } from './HeroSectionProps';

const HeroSection: React.FC<HeroSectionProps> = ({ items, className = '' }) => {
  return (
    <section className={`flex flex-col w-full px-6 md:px-8 py-12 md:py-16 ${className}`}>
      {items.map((item, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <div
            key={item.textGroup.paragraph.id ?? index}
            className={`
              flex flex-col
              ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'}
              items-center justify-center
              gap-6 md:gap-12 lg:gap-20
              mb-16 last:mb-0
            `}
          >
            <div className="w-full md:w-1/2 max-w-xl mx-auto md:max-w-none text-center md:text-left">
              <TextGroup {...item.textGroup} />
            </div>

            {item.image && (
              <div className="hidden md:flex w-full md:w-1/2 justify-center">
                <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                  <Image
                    {...item.image}
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HeroSection;
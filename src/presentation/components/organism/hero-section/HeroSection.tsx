import Image from '../../atoms/image/Image';
import TextGroup from '../../molecules/text-group/TextGroup';
import { HeroSectionProps } from './HeroSectionProps';

const HeroSection: React.FC<HeroSectionProps> = ({ items, className = '' }) => {
  return (
    <section
      className={`flex flex-col md:flex-row h-205 justify-center gap-x-52 items-center px-8 py-16  ${className}`}
    >
      {items.map((item, index) => (
        <div key={item.textGroup.paragraph.id || index} className="flex flex-row items-center">
          <TextGroup key={index} {...item.textGroup} />
          {item.image && (
            <div className="flex w-80 h-80">
              <Image className="rounded-xs" {...item.image} />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default HeroSection;

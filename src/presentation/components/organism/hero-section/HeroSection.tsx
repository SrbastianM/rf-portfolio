import Image from '../../atoms/image/Image';
import TextGroup from '../../molecules/text-group/TextGroup';
import { HeroSectionProps } from './HeroSectionProps';

const HeroSection: React.FC<HeroSectionProps> = ({ items }) => {
  return (
    <section className="flex flex-col md:flex-row justify-center gap-x-52 items-center px-8 py-16 bg-neutral-100">
      {items.map((item, index) => (
        <>
          <TextGroup key={index} {...item.textGroup} />
          {item.image && (
            <div className="flex w-80 h-80">
              <Image className="rounded-xs" {...item.image} />
            </div>
          )}
        </>
      ))}
    </section>
  );
};

export default HeroSection;

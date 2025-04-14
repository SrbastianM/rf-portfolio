import Image from '../../atoms/image/Image';
import TextGroup from '../../molecules/text-group/TextGroup';
import profile from '../.././../../assets/profile.jpeg';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-8 py-16 bg-neutral-100">
      <TextGroup />
      <div className="flex w-80 h-80">
        <Image className="rounded-xs" alt="Sebastian pic" src={profile} />
      </div>
    </section>
  );
};

export default HeroSection;

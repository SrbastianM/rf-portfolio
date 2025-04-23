import { ImageProps } from '../../atoms/image/ImageProps';
import { TextGroupProps } from '../../molecules/text-group/TextGroupProps';

export interface HeroItemProps {
  textGroup: TextGroupProps;
  image?: ImageProps;
}

export interface HeroSectionProps {
  items: HeroItemProps[];
  className?: string
}

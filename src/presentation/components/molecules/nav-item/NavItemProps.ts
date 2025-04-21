import { IconProps } from '../../atoms/icon/IconProps';
import { LabelProps } from '../../atoms/label/LabelProps';

export interface NavItemProps {
  label: LabelProps;
  icon?: IconProps;
  href?: string;
  active?: boolean;
}

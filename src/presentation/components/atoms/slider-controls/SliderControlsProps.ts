export interface SliderControlProps {
  direction: 'prev' | 'next';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

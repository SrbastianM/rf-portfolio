import { useEffect } from 'react';

interface UseTypewriterAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  shouldAnimate: boolean;
}

const useTypewriterAnimation = (
  elementRef: React.RefObject<HTMLElement>,
  { text, speed = 200, delay = 0, shouldAnimate }: UseTypewriterAnimationProps,
) => {
  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (!shouldAnimate) {
      el.textContent = text;
      return;
    }

    let currentText = '';
    let index = 0;

    el.textContent = '';

    const animateTypewriter = () => {
      if (index < text.length) {
        currentText += text.charAt(index);
        el.textContent = currentText;
        index++;
        setTimeout(animateTypewriter, speed);
      }
    };

    setTimeout(animateTypewriter, delay);

    return () => {
      el.textContent = '';
    };
  }, [elementRef, text, speed, delay, shouldAnimate]);
};

export default useTypewriterAnimation;

import { useEffect} from "react"
import { animate, stagger } from "animejs";


// const cardRef = useRef(null);

export const useCardAnimation = (shouldRun: boolean) => {
  useEffect(() => {
    if(!shouldRun) return;
    
    animate('.card-info', {
        opacity: [0, 1],
        scale: [0.8, 1],
        easing: 'easeOutExpo',
        duration: 800,
        delay: stagger(200),
      });
      
    animate('.lang-title', {
        targets: '.lang-title',
        translateY: [-30, 0],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        duration: 600,
        delay: 200,
      });
      
  }, [shouldRun])
}
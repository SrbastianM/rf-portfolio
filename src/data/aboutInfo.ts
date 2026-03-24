import { HeroItemProps } from '../presentation/components/organism/hero-section/HeroSectionProps';

export const aboutInfo: HeroItemProps[] = [
  {
    textGroup: {
      title: {
        text: 'About Me',
        fontSize: 'text-5xl',
        fontType: 'font-bold',
        color: '',
        className: 'text-center mb-14',
      },
      paragraph: {
        id: 'about-paragraph-1',
        text: `Hello, my name is Sebastian. I am a software professional with a strong interest in technology, continuous learning, and the evolution of web applications. In this section, I would like to briefly share my academic background and professional experience.

Around five years ago, I started my journey in programming and wrote my first program. From that moment, I decided to pursue a career in software development and began formal studies in Analysis and Systems Development at SENA, a Colombian technical institute focused on practical, industry-oriented training. This experience provided me with a solid foundation in software development principles and problem-solving.

After completing my studies, I started my professional career as a QA. During this period, I gained hands-on experience in the software development lifecycle, test design, defect management, and collaboration with cross-functional teams. Over time, I also became interested in automation and development practices, which motivated me to expand my technical skills.

While working, I continued learning through online platforms such as Udemy and Platzi, where I strengthened my knowledge in web and mobile development, as well as modern technologies and frameworks. This allowed me to better understand application architecture and improve my technical approach to quality assurance.

Later, I had the opportunity to transition into a development role, working with technologies such as React and ExpressJS. This experience helped me broaden my perspective and reinforced my interest in building scalable web applications while maintaining a strong quality mindset.

Today, I continue focusing on improving my skills in QA automation and web technologies. My goal is to contribute to high-quality software by combining testing, automation, and development knowledge. I am particularly interested in building maintainable test frameworks, improving reliability, and supporting efficient delivery processes.

Thank you for taking the time to read about my experience.
        `,
        fontWeight: 'lighter',
        fontSize: 'text-lg',
        animated: false,
      },
      shouldAnimate: false,
    },
  },
];

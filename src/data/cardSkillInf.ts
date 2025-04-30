import { CardInfoProps } from '../presentation/components/molecules/card-info/CardInfoProps';
import mobile from '../assets/mobile.png';
import web from '../assets/web.png';
import backend from '../assets/backend.png';

const marginTop = 'mt-1';
const cardTitleFontSize = 'text-3xl';
const padding = 'p-2';
const cardWebText =
  "I have experience creating projects such as E-commerce, SPA's, etc.... Everyone using React + TS. Also I start my deep understand of the SEO and how the browsers works, now I focus my studies in masterize React.";

const cardMobileText =
  'I have experience creating projects such as pomodoros clock, social-app, trivia aplication and more than 10 mobile apps using kotlin. Mobile was my first coding passion and I have a very love to it';

const cardBackendText =
  'I have experience creating RESTful API with golang, CRUDS and also consume it in a front end enviorment. I know about backend, is not my strongest skill but I constantly learn about it to improve this skill';

export const cardInf: CardInfoProps[] = [
  {
    image: {
      src: web,
    },
    paragraph: {
      text: cardWebText,
      className: padding,
      fontWeight: 'lighter',
    },
    title: {
      fontSize: cardTitleFontSize,
      className: marginTop,
      text: 'Web Development',
    },
  },
  {
    image: {
      src: mobile,
      rounded: '',
    },
    paragraph: {
      text: cardMobileText,
      className: padding,
      fontWeight: 'lighter',
    },
    title: {
      fontSize: cardTitleFontSize,
      className: marginTop,
      text: 'Mobile Development',
    },
  },
  {
    image: {
      src: backend,
    },
    paragraph: {
      text: cardBackendText,
      className: padding,
      fontWeight: 'lighter',
    },
    title: {
      className: marginTop,
      fontSize: cardTitleFontSize,
      text: 'Backend Development',
    },
  },
];

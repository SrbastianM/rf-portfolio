import { CardInfoProps } from "../presentation/components/molecules/card-info/CardInfoProps";
import profile from "../assets/profile.jpeg"

const testingText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 
const padding = "p-2"

export const cardInf : CardInfoProps[] = [
  {
    image: {
      src: profile     
    },
    paragraph: {
      text: testingText,
      className: padding,
      fontWeight: "lighter"
    },
    title: {
      text: "Nicolas"
    }
  },
  {
    image: {
      src: profile     
    },
    paragraph: {
      text: testingText,
      fontWeight: "lighter",
      className: padding,
    },
    title: {
      fontSize: "text-3xl",
      className: "mt-1",
      text: "Sebastian"
    }
  },
  {
    image: {
      src: profile     
    },
    paragraph: {
      text: "",
      className: padding,
      fontWeight: "lighter"
    },
    title: {
      text: "Lucas"
    }
  }
]
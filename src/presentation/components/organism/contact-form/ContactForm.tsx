import Paragraph from '../../atoms/paragraph/Paragraph';
import Button from '../../molecules/button/Button';
import Input from '../../molecules/input/Input';
import Title from '../../atoms/title/Title';
import Icon from '../../atoms/icon/Icon';
import { ContactFormProps } from './ContactFormProps';
import { CiLinkedin } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { SiBluesky } from 'react-icons/si';

const ContactForm: React.FC<ContactFormProps> = ({ items }) => {
  const titleTest = 'Contact';
  const paragraphTest =
    'You can send me an email directly, just enter your name and email address. I will be waiting to give you an answer as soon as possible.You can also see my networks by clicking on the following icons';
  return (
    <div className="h-screen flex flex-col justify-center align-middle bg-neutral-100">
      <Title text={titleTest} className="text-6xl" />
      <div className="flex flex-row justify-center space-x-24">
        <div className="min-h-auto flex flex-col mt-10">
          <Paragraph fontWeight="normal" text={paragraphTest} className="w-2xl" />
          <div className="h-30 flex flex-col items-start justify-end">
            <ul className="flex flex-row gap-4 justify-end">
              <li>
                <Icon icon={CiLinkedin} size={40} />
              </li>
              <li>
                <Icon icon={CiInstagram} size={40} />
              </li>
              <li>
                <Icon icon={SiBluesky} size={40} />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col mt-10">
          {items.map((item, index) => (
            <Input
              key={index}
              label={item.label}
              type={item.type}
              className={item.className}
              placeholder={item.placeholder}
              id={item.id}
            />
          ))}
          <Button className="px-14 py-6 mt-6 w-50" size="sm" text="Contact" color="black" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

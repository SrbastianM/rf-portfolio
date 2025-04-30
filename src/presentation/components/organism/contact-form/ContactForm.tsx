import Paragraph from '../../atoms/paragraph/Paragraph';
import Button from '../../molecules/button/Button';
import Input from '../../molecules/input/Input';
import Title from '../../atoms/title/Title';
import Icon from '../../atoms/icon/Icon';
import { ContactFormProps } from './ContactFormProps';
import { CiLinkedin } from 'react-icons/ci';
import { CiInstagram } from 'react-icons/ci';
import { SiBluesky } from 'react-icons/si';
import { useEmailSender } from '../../../hooks/useEmailSender';

const ContactForm: React.FC<ContactFormProps> = ({ items }) => {
  const { form, isSubmit, handleSubmit } = useEmailSender();
  const titleTest = 'Contact';
  const paragraphTest =
    'You can send me an email directly, just enter your name and email address. I will be waiting to give you an answer as soon as possible.You can also see my networks by clicking on the following icons';
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <Title text={titleTest} className="text-4xl sm:text-5xl md:text-6xl text-center" />

      <div className="flex flex-col md:flex-row justify-center gap-12 w-full max-w-6xl mt-10">
        <div className="flex flex-col items-start max-w-xl">
          <Paragraph fontWeight="normal" text={paragraphTest} className="text-left mb-6" />
          <ul className="flex flex-row gap-4">
            <li onClick={() => window.open('https://www.linkedin.com/in/srbastianm/')}>
              <Icon icon={CiLinkedin} size={40} />
            </li>
            <li onClick={() => window.open('https://www.instagram.com/srbastian_m')}>
              <Icon icon={CiInstagram} size={40} />
            </li>
            <li onClick={() => window.open('https://bsky.app/profile/whostenki.bsky.social')}>
              <Icon icon={SiBluesky} size={40} />
            </li>
          </ul>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col gap-4">
          {items.map((item, index) => (
            <Input
              key={index}
              label={item.label}
              type={item.type}
              className={item.className}
              placeholder={item.placeholder}
              id={item.id}
              name={item.name}
            />
          ))}
          <Button
            className="px-10 py-4 mt-4 w-full md:w-auto"
            size="sm"
            text={isSubmit ? 'Sending...' : 'Contact'}
            color="black"
            type="submit"
            disabled={isSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

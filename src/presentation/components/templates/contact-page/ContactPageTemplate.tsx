import { contactInfo } from '../../../../data/contactInfo';
import ContactForm from '../../organism/contact-form/ContactForm';

const ContactPageTemplate: React.FC = () => {
  return <ContactForm items={contactInfo} />;
};

export default ContactPageTemplate;

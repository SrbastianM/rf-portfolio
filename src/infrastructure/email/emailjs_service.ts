import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const emailService = import.meta.env.VITE_EMAIL_SERVICE;
const emailTemplate = import.meta.env.VITE_EMAIL_TEMPLATE;
const publicKey = import.meta.env.VITE_EMAIL_KEY;

export class EmailJsService {
  static sendContactEmail(form: HTMLFormElement): Promise<EmailJSResponseStatus> {
    return emailjs.sendForm(emailService, emailTemplate, form, { publicKey: publicKey });
  }
}

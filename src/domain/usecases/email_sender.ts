import { EmailJSResponseStatus } from '@emailjs/browser';

export interface EmailSender {
  send(form: HTMLFormElement): Promise<EmailJSResponseStatus>;
}

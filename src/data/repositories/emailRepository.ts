import { EmailJSResponseStatus } from '@emailjs/browser';
import { EmailSender } from '../../domain/usecases/email_sender';
import { EmailJsService } from '../../infrastructure/email/emailjs_service';

export class EmailRepository implements EmailSender {
  send(form: HTMLFormElement): Promise<EmailJSResponseStatus> {
    return EmailJsService.sendContactEmail(form);
  }
}

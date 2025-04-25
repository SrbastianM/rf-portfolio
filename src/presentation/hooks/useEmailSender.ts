import { FormEvent, useEffect, useRef, useState } from 'react';
import { EmailSenderResult } from '../../domain/models/EmailSenderResult';
import { EmailRepository } from '../../data/repositories/emailRepository';
import toast from 'react-hot-toast';

export const useEmailSender = (): EmailSenderResult => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success?: boolean; message?: string }>({});
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast && submitResult.message && submitResult.success !== undefined) {
      if (submitResult.success) {
        toast.success(submitResult.message);
        console.log(toast.success(submitResult.message));
      } else {
        toast.error(submitResult.message);
      }

      setShowToast(false);
    }
  }, [submitResult, showToast]);

  const resetForm = () => {
    form.current?.reset();
    setSubmitResult({});
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const entries = Object.fromEntries(formData.entries());

    const hasEmptyFields = Object.values(entries).some(value => !value.toString().trim);

    if (hasEmptyFields) {
      setSubmitResult({
        success: false,
        message: 'All fields are required.',
      });
      setShowToast(true);
      return;
    }

    setIsSubmit(true);
    try {
      await new EmailRepository().send(form.current);
      setSubmitResult({
        success: true,
        message: 'Message send correctly',
      });
      setShowToast(true);
      form.current.reset();
    } catch (e) {
      console.log('Error sending the email', e);
      setSubmitResult({
        success: false,
        message: 'Error sending the message, try again',
      });
      setShowToast(true);
    } finally {
      setIsSubmit(false);
    }
  };

  return {
    form,
    isSubmit,
    submitResult,
    handleSubmit,
    resetForm,
  };
};

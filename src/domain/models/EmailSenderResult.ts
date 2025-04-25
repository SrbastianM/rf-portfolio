import React, { FormEvent } from 'react';

export interface EmailSenderResult {
  form: React.RefObject<HTMLFormElement | null>;
  isSubmit: boolean;
  submitResult: {
    success?: boolean;
    message?: string;
  };
  handleSubmit: (e: FormEvent) => Promise<void>;
  resetForm: () => void;
}

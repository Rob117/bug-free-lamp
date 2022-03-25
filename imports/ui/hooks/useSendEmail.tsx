import React, { useState } from 'react'

export const useSendEmail = () => {
  const [email, setEmail] = useState('');

  const sendEmail = (count: number) => {
    if(!email) {
      return;
    }
    window.open(`mailto:${email}?subject=Your Count&body=${count}`)
  };

  const onEmailChange = (emailText: string) => {
    setEmail(emailText);
  };

  return {email, sendEmail, onEmailChange};
}

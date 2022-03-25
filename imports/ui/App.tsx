import React from 'react';
import { ChangeCountButton } from './components/changeCountButton';
import { useChangeIncrement } from './hooks/useChangeIncrement';
import { useSendEmail } from './hooks/useSendEmail';

export const App = () => {
  const { count, incrementCount, decrementCount } = useChangeIncrement();
  const { email, sendEmail, onEmailChange } = useSendEmail();
  const onClickSend = () => { sendEmail(count) };
  const onEmailFormTextChange = (e: React.ChangeEvent<HTMLInputElement>) => { onEmailChange(e.target.value) }
  return (
    <div>
      <h1>Time To Count</h1>
      {count}
      <div>
        <ChangeCountButton label='count up' onClick={incrementCount}/>
        <ChangeCountButton label='count down' onClick={decrementCount}/>
      </div>
      <br/>
      <br/>
      <form>
        <label>
          Email:
          <input type='text' value={ email } onChange={onEmailFormTextChange}/>
        </label>
      </form>
      <br/>
      <button onClick={ onClickSend } disabled={ !email }>
        Send Email
      </button>
    </div>
  );
}

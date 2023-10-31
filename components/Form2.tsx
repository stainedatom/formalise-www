import { Form, FormPage, Field, Button, NextPage, PrevPage } from '@panhaboth/formalise';
import styles from './Form.module.css';
import { ReactNode, useState } from 'react';
import Image from 'next/image';

function Row({ children }: { children: ReactNode }){
  return (
    <div className={styles.row}>
      {children}
    </div>
  );
}

function ErrorMessage({message}: {message: string | null}){
  return (
    <div className={styles.errorContainer}>
      {message}
    </div>
  );
}

export default function YourForm(){
  const [ error, setError ] = useState<string | null>(null);

  const validate = (obj: any) => {
    if(obj.email === 'kun@home.com') return true;
    else return false;
  }

  return (
    <div className={styles.form}>
      <Image src='/logoipsum.svg' alt='logo' width={200} height={140} style={{margin: '0 auto'}}/>
      <Form initialValues={{email: '', password: '', question: 'a', answer: ''}} onSubmit={(data, e) => {alert(JSON.stringify(data))}}>
        <FormPage className={styles.page}>
          {(validators, data) => <>
            {error ? <ErrorMessage message={error}/> : null}
            <Row><Field as='input' className={styles.input} name='email' type='text' placeholder='Email'/></Row>
            <Row><Field as='input' className={styles.input} name='password' type='password' placeholder='Password'/></Row>
            <Row><Button onClick={() => {
              const passed = validate({email: data.email, password: data.password});
              if(passed) return NextPage;
              else setError('The email does not match. Try entering kun@home.com to access the next page on this form.');
              console.log(data);
            }} className={`${styles.btn} ${styles.green}`}>Continue</Button></Row>
          </>}
        </FormPage>
        <FormPage className={styles.page}>
          <Field as='select' name='question' className={styles.input} style={{background: 'none'}}>
            <option value='a'>What's your birthday?</option>
            <option value='b'>In what town were you born?</option>
          </Field>
          <Field as='select' className={styles.input} name='answer' type='text' placeholder='Answer'/>
          <Button onClick={() => PrevPage} className={`${styles.btn} ${styles.orange}`}>Back</Button>
          <Button type='submit' className={`${styles.btn} ${styles.green}`}>Submit</Button>
        </FormPage>
      </Form>
    </div>
  )
}
import { Form, FormPage, Field, Button, NextPage, PrevPage } from '@panhaboth/formalise';
import styles from './Form.module.css';
import { ReactNode } from 'react';
import Image from 'next/image';

function Row({ children }: { children: ReactNode }){
  return (
    <div className={styles.row}>
      {children}
    </div>
  );
}

export default function YourForm(){

  return (
    <div className={styles.form}>
      <Image src='/logoipsum.svg' alt='logo' width={200} height={140} style={{margin: '0 auto'}}/>
      <Form initialValues={{email: '', password: '', question: 'a', answer: ''}} onSubmit={(data, e) => {alert(JSON.stringify(data))}}>
        <FormPage className={styles.page}>
          <Row><Field as='input' className={styles.input} name='email' type='text' placeholder='Email'/></Row>
          <Row><Field as='input' className={styles.input} name='password' type='password' placeholder='Password'/></Row>
          <Row><Button onClick={() => NextPage} className={`${styles.btn} ${styles.green}`}>Continue</Button></Row>
        </FormPage>
        <FormPage className={styles.page}>
          {(validators, data, setField) => <>
            <Field as='select' name='question' className={styles.input} style={{background: 'none'}} onChange={() => {
              setField('answer', '');
            }}>
              <option value='a'>What's your birthday?</option>
              <option value='b'>In what town were you born?</option>
            </Field>
            <Field as='input' className={styles.input} name='answer' type={data.question === 'a' ? 'date' : 'text'} placeholder='Answer'/>
            <Button onClick={() => PrevPage} className={`${styles.btn} ${styles.orange}`}>Back</Button>
            <Button type='submit' className={`${styles.btn} ${styles.green}`}>Submit</Button>
          </>}
        </FormPage>
      </Form>
    </div>
  )
}
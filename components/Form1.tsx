import { Form, FormPage, Input, Button, NextPage, PrevPage, Select } from '@panhaboth/formalise';
import styles from './Form1.module.css';
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
      <Image src='/logo.webp' alt='logo' width={140} height={140} style={{margin: '0 auto'}}/>
      <Form initialValues={{email: '', password: '', question: 'a', answer: ''}} onSubmit={(data, e) => {console.log(data, e)}}>
        <FormPage className={styles.page}>
          <Row><Input className={styles.input} name='email' type='text' placeholder='Email'/></Row>
          <Row><Input className={styles.input} name='password' type='password' placeholder='Password'/></Row>
          <Row><Button onClick={() => NextPage} className={`${styles.btn} ${styles.green}`}>Continue</Button></Row>
        </FormPage>
        <FormPage className={styles.page}>
          <Select name='question' className={styles.input} style={{background: 'none'}}>
            <option value='a'>What's your birthday?</option>
            <option value='b'>In what town were you born?</option>
          </Select>
          <Input className={styles.input} name='answer' type='text' placeholder='Answer'/>
          <Button onClick={() => PrevPage} className={`${styles.btn} ${styles.orange}`}>Back</Button>
          <Button className={`${styles.btn} ${styles.green}`}>Submit</Button>
        </FormPage>
      </Form>
    </div>
  )
}
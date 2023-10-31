import { Form, FormPage, Field, Button, FieldsArray, Push, Delete } from '@panhaboth/formalise';
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
      <Form initialValues={{invitees: [{name: '', email: ''}], message: ''}} onSubmit={(data, e) => {alert(JSON.stringify(data))}}>
        <FormPage className={styles.page}>
          <FieldsArray name='invitees'>
            {(index, length) => <> 
              <Field as='input' className={styles.input} name='name' placeholder={`Person ${index + 1}`}/>
              <Field as='input' className={styles.input} name='email' placeholder={`Email`}/>
              {index !== 0 && <Button style={{color: 'red'}} onClick={() => Delete}>Remove</Button>}
            </>}
          </FieldsArray><br/>
          <Field as='textarea' style={{height: '4rem'}} className={styles.input} name='message' placeholder='Message'/>
          <Row><Button onClick={() => Push('invitees')} className={`${styles.btn} ${styles.green}`}>+ Add Invitees</Button></Row>
        </FormPage>
      </Form>
    </div>
  )
}
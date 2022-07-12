import { useState } from 'react'
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { BACKEND_URL } from '../../consts';
import { IsRequired, MinLength3, MaxLength20 } from '../../helpers/validation'
import "./styles.css"

export const ContactPage = () => {

  const [contactData, setContactData] = useState({
    name: {
      value: "",
      error: undefined,
      validations: [IsRequired, MinLength3, MaxLength20]
    },
    email: {
      value: "",
      error: undefined,
      validations: [IsRequired, MinLength3, MaxLength20]
    },
    message: {
      value: "",
      error: undefined,
      validations: [IsRequired, MinLength3, MaxLength20]
    },
  })

  const onSubmit = (e) => {
    e.preventDefault()
    const { name: { value: name }, email: { value: email }, message: { value: message }, } = contactData
    const formGroup = {
      name,
      email,
      message
    }

    fetch(`${BACKEND_URL}/form`, {
      method: "POST",
      body: JSON.stringify(formGroup),
      headers: { "Content-type": "application/json" }
    })
    .then(res => res.json())
    .then (data => console.log(data))
  }

  const contactChange = (e) => {
    const {value,name} = e.target
    const { validations } = contactData[name];

    let error;

    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i]
      const errorMessage = validation(value)

      if (errorMessage) {
        error = errorMessage;
        break;
    }}
    setContactData((prev) => {
      return {
          ...prev,
          [name]: {
              ...prev[name],
              value,
              error
          },
      };
  });
  }

  return (
    <div className='contact-wrapper'>
      <div className='contact-img-wrapper'>
      <i className='bx bx-message-dots'></i>
      </div>
    <Form>
      <FormGroup>
        <Label for='nameId'>
          Name
        </Label>
        <Input style={{ width: '300px' }}
          id='nameId'
          name='name'
          onChange={contactChange} 
          invalid={!!contactData.name.error}/>
          {!!contactData.name.error && (
                    <FormFeedback>{contactData.name.error}</FormFeedback>
                )}

      </FormGroup>
      <FormGroup>
        <Label for='emailId'>
          Email
        </Label>
        <Input style={{ width: '300px' }}
          id='emailId'
          name='email'
          onChange={contactChange}
          invalid={!!contactData.email.error} />
          {!!contactData.email.error && (
                    <FormFeedback>{contactData.email.error}</FormFeedback>
                )}
      </FormGroup>

      <FormGroup>
        <Label for='messageId'>
          Message
        </Label>
        <Input style={{ width: '300px' }}
          id='messageId'
          name='message'
          onChange={contactChange}
          invalid={!!contactData.message.error} />
          {!!contactData.message.error && (
                    <FormFeedback>{contactData.message.error}</FormFeedback>
                )}
      </FormGroup>
      <Button onClick={onSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  );
};

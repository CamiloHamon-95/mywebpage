import IconSuccess from '../../assets/check.svg?react';
import IconError from '../../assets/error.svg?react';
import IconLoading from '../../assets/loading.svg?react';
import { TodoContext } from '../../TodoContext';
import emailjs from 'emailjs-com';
import './ContactSection.css';
import React from 'react';


function ContactSection () {

  const emailUserId = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;
  const emailTemplateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
  const emailServiceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const [resForm, setResForm] = React.useState('form');

  const {
    theme
  } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    setResForm('loading');
    event.preventDefault();
    setTimeout(
      () => console.log('Sending message...'), 3000
    );
    if( emailServiceId && emailTemplateId && emailUserId ){
      emailjs.send(
        emailServiceId,
        emailTemplateId,
        formData,
        emailUserId
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResForm('success');
      }).catch((err) => {
        console.log('FAILED...', err);
        setResForm('failed');
      });
    }else{
      setResForm('failed');
      console.log('FAILED. Environment variables');
    }
  };

  const onChange = (event) => {
    const idName = event.target.id;
    const value = event.target.value;
    var key = '1';
    if(idName === 'input-name'){
      key = 'name';
    }
    else if(idName === 'input-email'){
      key = 'email';
  }
    else if(idName === 'input-message'){
        key = 'message';
    }

    setFormData(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const validateEmail = (email) => {
    // Definimos la expresión regular para validar el email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Probamos si el email cumple con la expresión regular
    return regex.test(email);
  };

  const validateForm = () => {
    
    if(formData['name'] !== '' && formData['message'] !== '' && validateEmail(formData['email'])){
      return true;
    }
    else{
      return false;
    }
  };

  return (
    <section  id='contact'>
      <div className="general-title">
        <h1>
          Contact me
          <span>
              Keep in touch
          </span>
        </h1>
      </div>
      <div 
        className={`div-form`}
        style={{ 
          display: resForm === 'form' ? '' : 'none'
         }}
      >
        <form  onSubmit={onSubmit}>
          <div className='input-field field'>
            <input 
              type='text'
              placeholder='Full Name'
              id='input-name'
              className={`form-item theme-${theme} check-input-${formData['name'] !== '' ? 'ok' : 'stop'}`}
              autoComplete='off'
              onChange={onChange}
              required
            />
            <div className={`error-txt-${formData['name'] !== '' ? 'ok' : 'stop'}`}>
              Full Name can't be blank
            </div>
            <input 
              type='email'
              placeholder='Email Address'
              id='input-email'
              className={`form-item theme-${theme} check-input-${formData['email'] !== '' ? 'ok' : 'stop'}`}
              autoComplete='off'
              onChange={onChange}
              required
            />
            <div className={`error-txt-${ validateEmail(formData['email']) ? 'ok' : 'stop'}`}>
              Email can't be blank and should have the following structure: 'example@example.com'
            </div>
          </div>
          <div className='textarea-field field'>
              <textarea 
                type='text'
                placeholder='Your Message'
                id='input-message'
                className={`form-item theme-${theme} check-input-${formData['message'] !== '' ? 'ok' : 'stop'}`}
                autoComplete='off'
                onChange={onChange}
                required
              ></textarea>
              <div className={`error-txt-${formData['message'] !== '' ? 'ok' : 'stop'}`}>
                Message can't be blank
              </div>
          </div>
          <button
            className={`check-input-${validateForm() ? 'ok' : 'stop'}`}
            type='submit'
          > Send Message
          </button>
        </form>
      </div>
      <div 
        className={`div-form-outcome`}
        style={{ 
          display: resForm === 'form' ? 'none' : ''
         }}
      >
        <div
          className={`${resForm}`}
          style={{ 
            display: resForm === 'loading' ? '' : 'none'
           }}
        >
          <IconLoading className="Icon-svg-form" />
          <h2>
            Loading...
          </h2>
        </div>
        <div
          className={`${resForm}`}
          style={{ 
            display: resForm === 'success' ? '' : 'none'
           }}
        >
          <IconSuccess className="Icon-svg-form" />
          <h2>
            Thank you! Your message was sent <span>Successfully</span>
          </h2>
        </div>
        <div
          className={`${resForm}`}
          style={{ 
            display: resForm === 'failed' ? '' : 'none'
           }}
        >
          <IconError className="Icon-svg-form" />
          <h2>
            Sorry, your message <span>failed</span> to send.
          </h2>
        </div>
      </div>
      <div className='div-form-info'>
        <p>If you have problems with the form or want to contact me directly from your email inbox, 
          I will share my email address with you so we can stay in touch. Email: <a href='mailto:developerhamon95@gmail.com'>developerhamon95@gmail.com </a></p>
      </div>
    </section>
  )
  };
  
  export { ContactSection };
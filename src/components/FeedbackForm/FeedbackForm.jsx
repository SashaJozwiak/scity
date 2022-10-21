import React, { useRef } from "react";
import cl from "./FeedbackForm.module.scss";
import { send } from 'emailjs-com';

const FeedbackForm = () => {
  let canSend = true;
  const form = useRef();
  const sendProps = [];

  const formOnSubmit = (e) => {
    e.preventDefault();

    const elements = [
      {
        inputElem: form.current.querySelector('#input-name'),
        errorElem: form.current.querySelector('#error-name'),
        errorMsg: 'Имя должно быть от 2 до 70 символов, без цифр.',
        pattern: /[a-zа-я]{2,70}/i
      },
      {
        inputElem: form.current.querySelector('#input-email'),
        errorElem: form.current.querySelector('#error-email'),
        errorMsg: 'Неверный email.',
        pattern: /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i,
      },
      {
        inputElem: form.current.querySelector('#input-message'),
        errorElem: form.current.querySelector('#error-message'),
        errorMsg: 'Сообщение должно быть от 3 до 5000 символов.',
        pattern: /.{3,5000}/i
      },
    ];

    elements.forEach((elem) => {
      elem.errorElem.innerText = '';
      if (!elem.pattern.test(elem.inputElem.value)) {
        canSend = false;
        elem.errorElem.innerText = elem.errorMsg;
      } else {
        sendProps.push(elem.inputElem.value);
        elem.inputElem.value = '';
      }
    });
    if (canSend) {
      const toSend = {
        from_name: sendProps[0],
        to_name: 'Стройсити',
        message: sendProps[2],
        reply_to: sendProps[1],
      }
      send(
        'service_mxs6t1l',
        'template_2t1qqoj',
        toSend,
        'i4R4kFPoSs5Btp7VP',
      )
      console.log('улетело');
    }
  };

  return (
    <div className={cl.container}>
      <h1 className={cl.title}>Свяжитесь с нами</h1>
      <form ref={form} className={cl.form} onSubmit={(e) => formOnSubmit(e)}>
        <div className={cl.inputContainer}>
          <label className={cl.label}>{/* Ф.И.О.:  */}<input className={cl.input} id="input-name" type="text" placeholder='Ф.И.О.'/></label>
          <h2 className={cl.error} id="error-name"></h2>
        </div>
        <div className={cl.inputContainer}>
          <label className={cl.label}>{/* Email:  */}<input className={cl.input} id="input-email" type="text" placeholder='Электронная почта' /></label>
          <h2 className={cl.error} id="error-email"></h2>
        </div>
        <div className={cl.inputContainer}>
          <label className={`${cl.label} ${cl.message}`}>{/* Сообщение: */} <textarea className={`${cl.input} ${cl.message}`} id="input-message" placeholder='Сообщение'></textarea></label>
          <h2 className={cl.error} id="error-message"></h2>
        </div>
        <button type="submit" className={cl.submit} >Отправить</button>
      </form>
    </div >
  )
}

export default FeedbackForm;
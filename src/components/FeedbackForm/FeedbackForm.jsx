import React, { useRef } from "react";
import cl from "./FeedbackForm.module.scss";

const FeedbackForm = () => {
  const form = useRef();

  const formOnSubmit = (e) => {
    e.preventDefault();

    const elements = [
      {
        inputElem: form.current.querySelector('#input-name'),
        errorElem: form.current.querySelector('#error-name'),
        errorMsg: 'Имя должно быть от 2 до 70 символов, без цифр.',
        pattern: /[a-zа-я]{1,20}/i
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
        errorMsg: 'Сообщение должно быть от 20 до 3000символов.',
        pattern: /.{20,3000}/i
      },
    ];

    elements.forEach((elem) => {
      elem.errorElem.innerText = '';
      if (!elem.pattern.test(elem.inputElem.value)) {
        elem.errorElem.innerText = elem.errorMsg;
      } else {
        elem.inputElem.value = '';
      }
    });
  };

  return (
    <div className={cl.container}>
      <h1 className={cl.title}>Свяжитесь с нами</h1>
      <form ref={form} className={cl.form} onSubmit={(e) => formOnSubmit(e)}>
        <div className={cl.inputContainer}>
          <label className={cl.label}>Ф.И.О.: <input className={cl.input} id="input-name" type="text" /></label>
          <h2 className={cl.error} id="error-name"></h2>
        </div>
        <div className={cl.inputContainer}>
          <label className={cl.label}>Email: <input className={cl.input} id="input-email" type="text" /></label>
          <h2 className={cl.error} id="error-email"></h2>
        </div>
        <div className={cl.inputContainer}>
          <label className={`${cl.label} ${cl.message}`}>Сообщение: <textarea className={`${cl.input} ${cl.message}`} id="input-message" ></textarea></label>
          <h2 className={cl.error} id="error-message"></h2>
        </div>
        <button type="submit" className={cl.submit} >Отправить</button>
      </form>
    </div >
  )
}

export default FeedbackForm;
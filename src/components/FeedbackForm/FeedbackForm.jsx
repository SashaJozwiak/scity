import React, { useRef } from "react";
import cl from "./FeedbackForm.module.scss";
import { send } from 'emailjs-com';

const FeedbackForm = () => {
  const formRef = useRef();

  const formOnSubmit = (e) => {
    e.preventDefault();
    const valid = formValidate(formRef.current);

  };

  const formValidate = (form) => {
    let valid = true;
    const fields = [
      {
        elem: form.elements[0],
        pattern: /[a-zа-я]{2,70}/i
      },
      {
        elem: form.elements[1],
        pattern: /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i,
      },
      {
        elem: form.elements[2],
        pattern: /.{3,5000}/i
      },
    ];

    fields.forEach((field) => {
      field.elem.classList.remove(`${cl.inputError}`);
      if (!field.pattern.test(field.elem.value)) {
        field.elem.classList.add(`${cl.inputError}`);
        valid = false;
      };
    });
    return valid;
  };

  return (
    <div className={cl.container}>
      <h1 className={cl.title}>Свяжитесь с нами</h1>
      <form ref={formRef} className={cl.form} onSubmit={(e) => formOnSubmit(e)}>
        <div className={cl.inputContainer}>
          <label className={cl.label}>
            <input
              className={cl.input}
              id="input-name"
              name="name"
              type="text"
              placeholder='Ф.И.О.'
            />
          </label>
          <h2 className={cl.error} id="error-name"></h2>
        </div>

        <div className={cl.inputContainer}>
          <label className={cl.label}>
            <input
              className={cl.input}
              id="input-email"
              name="email"
              type="text"
              placeholder='Электронная почта'
            />
          </label>
          <h2 className={cl.error} id="error-email"></h2>
        </div>

        <div className={cl.inputContainer}>
          <label className={`${cl.label} ${cl.message}`}>
            <textarea
              className={`${cl.input} ${cl.message}`}
              id="input-message"
              name="message"
              placeholder='Сообщение'
            />
          </label>
          <h2 className={cl.error} id="error-message"></h2>
        </div>

        <button
          type="submit"
          className={cl.submit}
        >
          Отправить
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm;
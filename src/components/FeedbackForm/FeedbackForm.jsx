import React from "react";
import cl from "./FeedbackForm.module.scss";

const FeedbackForm = () => {
  return (
    <div className={cl.container}>
      <h1 className={cl.title}>Свяжитесь с нами</h1>
      <form className={cl.form}>
        <label className={cl.label}>Ф.И.О.: <input className={cl.input} type="text" /></label>
        <label className={cl.label}>Email: <input className={cl.input} type="email" /></label>
        <label className={`${cl.label} ${cl.message}`}>Сообщение: <input className={`${cl.input} ${cl.message}`} type="text" /></label>
      </form>
    </div>
  )
}

export default FeedbackForm;
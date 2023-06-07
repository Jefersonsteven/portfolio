"use client";
import React, { useContext } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AppContext } from "@/context/AppContext";
import styles from "./ContactForm.module.scss";

function ContactForm() {
  const { language } = useContext(AppContext);
  const [state, handleSubmit] = useForm("xbjevkkv");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form className={`form ${styles.form}`} onSubmit={handleSubmit}>
      <label htmlFor="email">{language.contact.mail}</label>
      <input id="email" type="email" name="email" />
      <label htmlFor="name">{language.contact.name}</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="subject">{language.contact.subject}</label>
      <input id="subject" type="text" name="subject" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        rows={15}
        placeholder={`${language.contact.message} ...`}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div>
        <button className="button" type="submit" disabled={state.submitting}>
          {language.contact.button}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

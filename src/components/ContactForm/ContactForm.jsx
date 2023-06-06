"use client";
import React, { useContext } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AppContext } from "@/context/AppContext";
function ContactForm() {
  const { language } = useContext(AppContext);
  const [state, handleSubmit] = useForm("xbjevkkv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
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
        placeholder={language.contact.message}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        {language.contact.button}
      </button>
    </form>
  );
}

export default ContactForm;

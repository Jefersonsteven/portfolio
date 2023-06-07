"use client";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./contact.module.scss";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

function Contact() {
  const { language } = useContext(AppContext);
  return (
    <main className={styles.main}>
      <h1>
        <b>{language.contact.title}</b>
      </h1>
      <ContactForm />
    </main>
  );
}

export default Contact;

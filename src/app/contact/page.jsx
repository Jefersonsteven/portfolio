"use client";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./contact.module.scss";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

function Contact() {
  const { language } = useContext(AppContext);
  return (
    <main>
      <h1>{language.contact.title}</h1>
      <ContactForm />
    </main>
  );
}

export default Contact;

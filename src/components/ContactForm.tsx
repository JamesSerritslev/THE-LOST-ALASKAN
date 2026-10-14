"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill this hidden field; real users leave it empty.
    const honeypot = String(data.get("company_url") ?? "").trim();
    if (honeypot) {
      setState("success");
      setMessage("Thanks — your message has been received.");
      form.reset();
      return;
    }

    // Template stub: wire this to your form endpoint / API route / CRM.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setState("success");
    setMessage("Thanks — your message has been received. We will reply soon.");
    form.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={styles.input}
          />
        </label>

        <label className={styles.label} htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={styles.input}
          />
        </label>
      </div>

      <label className={styles.label} htmlFor="subject">
        Subject
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className={styles.input}
        />
      </label>

      <label className={styles.label} htmlFor="message">
        Message
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={styles.textarea}
        />
      </label>

      {/* Honeypot field — hidden from users, visible to bots */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company_url">
          Company website
          <input
            id="company_url"
            name="company_url"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Sending…" : "Send message"}
      </button>

      {message ? (
        <p className={styles.feedback} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

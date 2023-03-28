import { useEffect, useState } from "react";
import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    const errors = [];
    if (!name) errors.push("name");
    if (!validEmail.test(email)) errors.push("email");
    if (!message) errors.push("message");
    setValidationErrors(errors);
  }, [email, name, message]);

  const sendEmail = (e) => {
    e.preventDefault();
    const errorElements = document.getElementsByClassName("error-message");

    for (let i = 0; i < errorElements.length; i++) {
      const error = errorElements[i];
      error.classList.remove("show-error-message");
    }

    if (!validationErrors.length) {
      emailjs
        .sendForm(
          "service_vuw3xhj",
          "template_x2714ql",
          form.current,
          "eMlZzUFZjzRtC_BAp"
        )
        .then(
          (result) => {
            setSubmitted(true);
            setTimeout(() => {
              setSubmitted(false);
            }, 15000);
            setEmail("");
            setName("");
            setMessage("");
          },
          (error) => {
            setValidationErrors([error.text]);
          }
        );
    } else {
      validationErrors.forEach((error) => {
        const element = document.getElementById(`error-${error}`);
        element.classList.add("show-error-message");
      });
    }
  };

  return (
    <div className="flex flex-col m-20 gap-10">
      <div className="text-8xl font-thin tracking-wide">Contact Us</div>
      <div>
        <form className="w-fit m-auto" ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 gap-10">
            <div className="contact-input-name">
              Name
              <input
                className="contact-input"
                placeholder="Name"
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="error-message" id="error-name">
                A valid name is required
              </p>
            </div>
            <div className="contact-input-email">
              Email
              <input
                className="contact-input"
                placeholder="Email"
                type="text"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="error-message" id="error-email">
                A valid email is required
              </p>
            </div>
            <div className="contact-input-message col-span-2">
              Message
              <textarea
                className="contact-input contact-message-input"
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <p className="error-message" id="error-message">
                A valid message is required
              </p>
              <button className="submit-contact-form" type="submit">
                SEND MESSAGE
              </button>
              {submitted && (
                <div className="successful-message">
                  Thank you! Your submission has been received.
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

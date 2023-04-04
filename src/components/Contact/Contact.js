import { useEffect, useState, useRef } from "react";
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
    <div className="contact-section flex flex-col m-20 gap-10">
      <div className="text-8xl font-thin tracking-wide text-center">
        Contact Us
      </div>
      <div>
        <form className="w-240 m-auto" ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-2 text-start text-[#353535] text-2xl">
              <p>Name</p>
              <input
                className="p-4 rounded-md border outline-none"
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p
                className="font-source font-light text-xl text-[#bf0000]"
                id="error-name"
              >
                A valid name is required
              </p>
            </div>
            <div className="flex flex-col gap-2 text-start text-[#353535] text-2xl">
              <p>Email</p>
              <input
                className="p-4 rounded-md border outline-none"
                type="text"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p
                className="font-source font-light text-xl text-[#bf0000]"
                id="error-email"
              >
                A valid email is required
              </p>
            </div>
            <div className="flex flex-col gap-2 text-start text-[#353535] text-2xl col-span-2">
              <p>Message</p>
              <textarea
                className="p-4 rounded-md border outline-none resize-none h-96"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <p
                className="font-source font-light text-xl text-[#bf0000]"
                id="error-message"
              >
                A valid message is required
              </p>
              <button
                className="bg-[#3c6e71] hover:bg-[#2c5153] text-white p-6 tracking-wide rounded-md"
                type="submit"
              >
                SEND MESSAGE
              </button>
              {submitted && (
                <div className="font-source">
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

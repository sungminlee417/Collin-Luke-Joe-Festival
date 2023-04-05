import { Formik, Form, Field } from "formik";

interface MyFormValues {
  subject: string;
  message: string;
}

export const Contact = () => {
  const initialValues: MyFormValues = { subject: "", message: "" };

  return (
    <div className="contact-section flex flex-col m-20 gap-10">
      <div className="text-8xl font-thin tracking-wide text-center">
        Contact Us
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            const { subject, message } = values;
            window.location.href = `mailto:${"themuseduo@gmail.com"}?subject=${
              subject || ""
            }&body=${message || ""}`;
            actions.setSubmitting(false);
          }}
        >
          <Form className="w-240 m-auto flex flex-col gap-10 text-[#353535] text-2xl">
            <Field
              id="subject"
              name="subject"
              placeholder="Subject"
              className="p-4 rounded-md border outline-none"
            />
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Message"
              className="p-4 rounded-md border outline-none resize-none h-96"
            />
            <button
              type="submit"
              className="bg-[#3c6e71] hover:bg-[#2c5153] text-white p-6 tracking-wide rounded-md"
            >
              SEND MESSAGE
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Contact;